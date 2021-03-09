import { CommonsConfig } from '../../markets/aave/commons';
import { AaveConfig } from '../../markets/aave/index';
import { task } from 'hardhat/config';
import {
  loadPoolConfig,
  ConfigNames,
  getWethAddress,
  getTreasuryAddress,
} from '../../helpers/configuration';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { eEthereumNetwork, ICommonConfiguration } from '../../helpers/types';
import { getParamPerNetwork } from '../../helpers/contracts-helpers';

import { deployContract } from 'ethereum-waffle';
import { deployHexTestToken } from '../../helpers/contracts-deployments';
import { ZERO_ADDRESS } from '../../helpers/constants';
import { logger } from 'ethers';
import BigNumber from 'bignumber.js';

function makeBytes32(val: string): string {
  let tmp = Buffer.alloc(32);
  tmp.write(val);
  return `0x${tmp.toString('hex')}`;
}

task('full:missing:token', 'Initial missing token')
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
      const { ReserveAssets, ReservesConfig } = poolConfig as ICommonConfiguration;

      const reserveAssets = await getParamPerNetwork(ReserveAssets, network);

      /*deployHexTestToken([

      ])
      BAT - Hex Trust Test Token (BAT)*/

      //console.log(pool, hre.network.name, reserveAssets, ReservesConfig, poolConfig);

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
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });
