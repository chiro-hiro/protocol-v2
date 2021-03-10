import { task } from 'hardhat/config';
import { loadPoolConfig, ConfigNames } from '../../helpers/configuration';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { eEthereumNetwork, ICommonConfiguration } from '../../helpers/types';
import { getParamPerNetwork } from '../../helpers/contracts-helpers';
import { deployHexTestToken, deployMockAggregator } from '../../helpers/contracts-deployments';
import { ZERO_ADDRESS } from '../../helpers/constants';

function makeBytes32(val: string): string {
  let tmp = Buffer.alloc(32);
  tmp.write(val);
  return `0x${tmp.toString('hex')}`;
}

task('full:missing:contracts', 'Initial missing contracts')
  .addParam(
    'pool',
    `Pool name to retrieve configuration, supported: ${Object.values(ConfigNames)}`,
    'Aave'
  )
  .setAction(async ({ pool }, hre: HardhatRuntimeEnvironment) => {
    try {
      await hre.run('set-DRE');
      const network = <eEthereumNetwork>hre.network.name;
      const poolConfig = loadPoolConfig(pool);
      const { ReserveAssets, ChainlinkAggregator, Mocks } = poolConfig as ICommonConfiguration;

      const reserveAssets = await getParamPerNetwork(ReserveAssets, network);
      const chainlinkAggregator = await getParamPerNetwork(ChainlinkAggregator, network);

      const listOfToken = {};

      const assetEntries = Object.entries(reserveAssets);
      for (let i = 0; i < assetEntries.length; i++) {
        const [key, value] = assetEntries[i];
        if (ZERO_ADDRESS === value) {
          const name = `${key} - Hex Trust Test Token (${key})`;
          console.log(`Going to deploy: ${name}`);
          const deployedToken = await deployHexTestToken(
            [makeBytes32(key), makeBytes32(name), '0x12', '0xc097ce7bc90715b34b9f1000000000'],
            false
          );
          listOfToken[key] = deployedToken.address;
        }
      }
      console.log('Deployed tokens:', listOfToken);
      const listOfAggregator = {};
      const aggregatorEntries = Object.entries(chainlinkAggregator);
      for (let i = 0; i < aggregatorEntries.length; i++) {
        const [key, value] = aggregatorEntries[i];
        if (ZERO_ADDRESS === value) {
          const aggregator = await deployMockAggregator(Mocks.AllAssetsInitialPrices[key]);
          listOfAggregator[key] = aggregator.address;
          console.log(
            `Deploy missing aggregators ${key}: ${aggregator.address}`,
            Mocks.AllAssetsInitialPrices[key]
          );
        }
      }
      console.log('Deployed aggregators:', listOfAggregator);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });
