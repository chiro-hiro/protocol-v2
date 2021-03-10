```
        .///.                .///.     //.            .//  `/////////////-
       `++:++`              .++:++`    :++`          `++:  `++:......---.`
      `/+: -+/`            `++- :+/`    /+/         `/+/   `++.
      /+/   :+/            /+:   /+/    `/+/        /+/`   `++.
  -::/++::`  /+:       -::/++::` `/+:    `++:      :++`    `++/:::::::::.
  -:+++::-`  `/+:      --++/---`  `++-    .++-    -++.     `++/:::::::::.
   -++.       .++-      -++`       .++.    .++.  .++-      `++.
  .++-         -++.    .++.         -++.    -++``++-       `++.
 `++:           :++`  .++-           :++`    :+//+:        `++:----------`
 -/:             :/-  -/:             :/.     ://:         `/////////////-
```

# Aave Protocol v2

This repository contains the smart contracts source code and markets configuration for Aave Protocol V2. The repository uses Docker Compose and Hardhat as development enviroment for compilation, testing and deployment tasks.

## Deployed

```
chiro@chiro-pc:~/gits/smart-contacts/protocol-v2$ npm run "aave:ropsten:full:migration"

> protocol-v2@1.0.0 aave:ropsten:full:migration
> npm run compile && npm run hardhat:ropsten -- aave:mainnet


> protocol-v2@1.0.0 compile
> SKIP_LOAD=true hardhat compile

Nothing to compile
Creating Typechain artifacts in directory types for target ethers-v5
Successfully generated Typechain artifacts!

> protocol-v2@1.0.0 hardhat:ropsten
> hardhat --network ropsten "aave:mainnet"

Migration started

1. Deploy address provider
Registry Address 0xE84AdB69dCb4C272c315972D4319731e0fe43835
*** LendingPoolAddressesProvider ***

Network: ropsten
tx: 0x20918979d2adf2da9516379256f9bcba0ebe598995e0ae21a6ff16828a56402c
contract address: 0x8aDAaBA5c382705FA6e492404d21d113C4F06f3B
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 1602232

******

Pool Admin 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
Emergency Admin 0x475bDe7E91B1a666B7634D40e8aa67a35B750319
2. Deploy lending pool
*** ReserveLogic ***

Network: ropsten
tx: 0x80065e77ce453a87f6a967413cc963a1c0bb15ad95517b397d32b0d6c2d8e516
contract address: 0x8522bAB938Ed255f8298Fb1dC47Ace560cC21063
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 176615

******

*** GenericLogic ***

Network: ropsten
tx: 0xb431719b9a1a56702157ffd4e63aa4132456dcacee3e71e5866b34315785ec92
contract address: 0xBF271c9f6a088F36A6355860853eb4803C3A45AA
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 851914

******

*** ValidationLogic ***

Network: ropsten
tx: 0x8167fdf5aee5a319ccaf5dfc26a0d46985da30fc9063b730354b8656130916df
contract address: 0xc5fC91cD74010f5ef004f76BE70aeF76184C0c0B
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 1860346

******

*** LendingPool ***

Network: ropsten
tx: 0x0e5f36189b5116152005f9e98cd28649e41aebce454ce89e6ed53a9853761a4b
contract address: 0xC3Df00567ff90E21bF8B54301B045808d42402Ec
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 4797656

******

*** LendingPoolConfigurator ***

Network: ropsten
tx: 0x9a8dd7ad4ead2e96641a81c5f6657e36cd27d8dc183e75bfbb56036b66420e30
contract address: 0x23313428B603FDefB7Fe38DB7b81dacD67599C7F
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 3441609

******

*** StableAndVariableTokensHelper ***

Network: ropsten
tx: 0xcb88eedb720f6611cf09ae91c015fcdee7e901696a2996636ea3051cdd025d1b
contract address: 0xfCE2E076b2D36d7157Bf7daaB7a7745cb2a3bE58
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 3937597

******

*** ATokensAndRatesHelper ***

Network: ropsten
tx: 0xba7fc442b41343b7d6a434bb2d22678503452b6775beaa0999237f8dd6a3f5eb
contract address: 0x9b562777426A84eDdEECE1EBB79f9AFDf1acb2dE
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 4296736

******

3. Deploy oracles
*** AaveOracle ***

Network: ropsten
tx: 0xcde2005b0ec14f3a827cffe926a6d081a10d1f85c8c2b3f20f0dbb5aa2d847e7
contract address: 0x79e1e82f1eEb413daA2F7EB8d9AFa3EF71753E41
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 1161711

******

4. Deploy Data Provider
*** AaveProtocolDataProvider ***

Network: ropsten
tx: 0xc5308df95c67b1d5d21d5286ab651aa7caa286f14798efa9319a6d1e69950f65
contract address: 0xE2C937F728643EFDE6A56aCc0Da85dC9d0fd26F1
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 1555866

******

5. Initialize lending pool
- Token deployments in 20 txs instead of 80 txs
  - Deployed aToken, DebtTokens and Strategy for: AAVE, BAT
    * gasUsed: debtTokens batch 5597342
    * gasUsed: aTokens and Strategy batch 5639148
  - Deployed aToken, DebtTokens and Strategy for: BUSD, DAI
    * gasUsed: debtTokens batch 5597342
    * gasUsed: aTokens and Strategy batch 5639352
  - Deployed aToken, DebtTokens and Strategy for: ENJ, KNC
    * gasUsed: debtTokens batch 5597318
    * gasUsed: aTokens and Strategy batch 5639532
  - Deployed aToken, DebtTokens and Strategy for: LINK, MANA
    * gasUsed: debtTokens batch 5597354
    * gasUsed: aTokens and Strategy batch 5639568
  - Deployed aToken, DebtTokens and Strategy for: MKR, REN
    * gasUsed: debtTokens batch 5597330
    * gasUsed: aTokens and Strategy batch 5639544
  - Deployed aToken, DebtTokens and Strategy for: SNX, SUSD
    * gasUsed: debtTokens batch 5597342
    * gasUsed: aTokens and Strategy batch 5639244
  - Deployed aToken, DebtTokens and Strategy for: TUSD, USDC
    * gasUsed: debtTokens batch 5597354
    * gasUsed: aTokens and Strategy batch 5639568
  - Deployed aToken, DebtTokens and Strategy for: USDT, WBTC
    * gasUsed: debtTokens batch 5597354
    * gasUsed: aTokens and Strategy batch 5639568
  - Deployed aToken, DebtTokens and Strategy for: WETH, YFI
    * gasUsed: debtTokens batch 5597342
    * gasUsed: aTokens and Strategy batch 5639556
  - Deployed aToken, DebtTokens and Strategy for: ZRX
    * gasUsed: debtTokens batch 2811278
    * gasUsed: aTokens and Strategy batch 2832698
  - Deploy UNI delegation aware aToken, debts tokens, and strategy
*** DelegationAwareAToken ***

Network: ropsten
tx: 0x14894efba8b809a3b6467a41c232689acef9063c7d8c9df6acd3a0695e7c0321
contract address: 0x5B43F9508544f1C7A578e1DffCAda8F650bB6Cc4
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 2455919

******

*** StableDebtToken ***

Network: ropsten
tx: 0xa5d12a560c1df266582cf4fcc2cafc2b0598164ea56c2ee3b0f4d11cbab047fc
contract address: 0x29Bdcb47B071D108b4ACcc831fC6235F88A34F5A
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 1652609

******

*** VariableDebtToken ***

Network: ropsten
tx: 0x90a8a1bc0aa25b809f98177dc19f72e8078edc06b2efaf5e3d7be5bb2955fc26
contract address: 0x97DA36cAAC52F5acb64A52D49eD8a857eF327914
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 1387495

******

*** DefaultReserveInterestRateStrategy ***

Network: ropsten
tx: 0x7414cfb23cc257e0c226f05f77f3a42500315ebe5c35c2031b59c3e571a00422
contract address: 0x96877f0540819d44D69Fd93E2b83103493999436
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 719889

******

- Reserves initialization in 5 txs
  - Reserve ready for: AAVE, BAT, BUSD, DAI
    * gasUsed 7156892
  - Reserve ready for: ENJ, KNC, LINK, MANA
    * gasUsed 7141904
  - Reserve ready for: MKR, REN, SNX, SUSD
    * gasUsed 7141892
  - Reserve ready for: TUSD, USDC, USDT, WBTC
    * gasUsed 7141892
  - Reserve ready for: WETH, YFI, ZRX, UNI
    * gasUsed 7141948
- Configure reserves in 1 txs
  - Init for: AAVE, BAT, BUSD, DAI, ENJ, KNC, LINK, MANA, MKR, REN, SNX, SUSD, TUSD, UNI, USDC, USDT, WBTC, WETH, YFI, ZRX
*** LendingPoolCollateralManager ***

Network: ropsten
tx: 0x12345896c3407a5cf8f4aa6a31cfc8e80de9ddc86a6692ed8581e82104b12e8b
contract address: 0x85c8d563D3548C44e758716D760C188198b270a1
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 2395347

******

*** WalletBalanceProvider ***

Network: ropsten
tx: 0x6621af5ca0e0a86110352692eb6357df5678acf34be25e73e115618444bdb5cf
contract address: 0x9A271db798fE24d105F9A4B0b1293A77bad3CB3F
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 627128

******

*** WETHGateway ***

Network: ropsten
tx: 0x7023a886444292ebab7f13a80c7122441740ed1bb7a689023f66eba649d38828
contract address: 0x086E0C9f15079A3FF5a0359247758453Ed697D65
deployer address: 0x7Ca1c277B988af73137bcab2790FA54E3F1c96ec
gas price: 2000000000
gas used: 1239796

******


Finished migrations
Contracts deployed at ropsten
---------------------------------
N# Contracts: 99
LendingPoolAddressesProviderRegistry: 0xE84AdB69dCb4C272c315972D4319731e0fe43835
LendingPoolAddressesProvider: 0x8aDAaBA5c382705FA6e492404d21d113C4F06f3B
ReserveLogic: 0x8522bAB938Ed255f8298Fb1dC47Ace560cC21063
GenericLogic: 0xBF271c9f6a088F36A6355860853eb4803C3A45AA
ValidationLogic: 0xc5fC91cD74010f5ef004f76BE70aeF76184C0c0B
LendingPoolImpl: 0xC3Df00567ff90E21bF8B54301B045808d42402Ec
LendingPool: 0x19112dAdaDF490Dc01ADd9bAb94b45E5FEECB383
LendingPoolConfiguratorImpl: 0x23313428B603FDefB7Fe38DB7b81dacD67599C7F
LendingPoolConfigurator: 0x42b7817B945927E445F84E55459fe455d3a735F0
StableAndVariableTokensHelper: 0xfCE2E076b2D36d7157Bf7daaB7a7745cb2a3bE58
ATokensAndRatesHelper: 0x9b562777426A84eDdEECE1EBB79f9AFDf1acb2dE
AaveOracle: 0x79e1e82f1eEb413daA2F7EB8d9AFa3EF71753E41
AaveProtocolDataProvider: 0xE2C937F728643EFDE6A56aCc0Da85dC9d0fd26F1
stableDebtAAVE: 0x62f4404da87EBF45366B845c8eF4f224b2896986
variableDebtAAVE: 0xD5B679c4b6e48FAF7efE351A2157B938F63b1875
stableDebtBAT: 0xE4DC1741f9ad0b7096C82b95C03eE59D490Cf63A
variableDebtBAT: 0xCACDc526Ea095386eb058d5CB7629bC5F083ac23
aAAVE: 0x77DBCB0eD833c607203606c2Fb7e5ad96830fc06
strategyAAVE: 0x949C53081181806923a26369b95728b4e20Bf2ed
aBAT: 0xb1D0CFb85A59cF5bF72fD431c851C7d8eafF1F24
strategyBAT: 0x7cad346F12BfD1E78c4e7AfD2C15731857dA7ac3
stableDebtBUSD: 0xb4755D6c7a34286DD30e88681377bbB03ba1a8e5
variableDebtBUSD: 0x33323616db3994174446b20E81987cD23522411e
stableDebtDAI: 0x9d164B3b0600522ce621eCA85E0F82a6C9cF47bA
variableDebtDAI: 0xc3454F54dEDA3FD7a6d998fDB263c77f200CbdAE
aBUSD: 0x66783651f693ec3Eb67f1217c3bfdd1fF3919b4e
strategyBUSD: 0x2b161095b2035fB0C22b06E8b94036579dB8808c
aDAI: 0xD34Ff78Bf4599c9De33dc1d6A363d02E8edA727E
strategyDAI: 0xaAe90Ae7ff0eaEab6Ac505c74936e6a3aE6A3c76
stableDebtENJ: 0xeaB341c05f1f46F0b2D07Be4c53f64080554e9cf
variableDebtENJ: 0x802bE540a1F33DC2AC375dc54349cE8AC2ED7357
stableDebtKNC: 0x23eBB4eE47912914ED90119CC9AEbd6bBcc407ab
variableDebtKNC: 0x4EA4b784e3C637a4eFA970248b60E418C84a7b97
aENJ: 0x0506cF12107822A7A50d5490220Bb2051a104A22
strategyENJ: 0xE8b945AEAd672b1944c9e139314172d745a77dE6
aKNC: 0x0359f91b9Bf85194dFC056268Bc71233aEd553Ff
strategyKNC: 0xdB8b23f74053843eDb49a1899bF8C0B118f6C070
stableDebtLINK: 0xEcd47232754F8e2a29cF7C7bAfa4aBb23A62F6fc
variableDebtLINK: 0x03696Ce747Ac01d1e2A9541E85d006d151599e2B
stableDebtMANA: 0x088252d6287aA67da7043309aAEff3ded703dfe2
variableDebtMANA: 0x453FBb4D56FdaA06C98F5dd4f592876847980F5E
aLINK: 0xDca33D4a5108c99109147456d988b467bEAf100c
strategyLINK: 0xCaEAfE8C15D582B36F5a1633B77b138544E2837f
aMANA: 0xcE8D6eF733823a9b292b2e8D7f3fC93915609E2F
strategyMANA: 0x36606945d4beeB02078A67b63151346359cf4EB9
stableDebtMKR: 0xf608e2252642A73524c33f712fa0831Ca941dc90
variableDebtMKR: 0xBCb4392464E920E7726a8817b776f810105CD90d
stableDebtREN: 0x624255ad7a705222c3d7BA7cFe4BfA9298e18F14
variableDebtREN: 0x3a85b368213b118a29C8B4A594Db4329a95b017d
aMKR: 0x0b092d3E42c33263AABB039416196cc0e0C67AC5
strategyMKR: 0xBF7285c63d90168f57fE57Ce4e0176A569EC9b24
aREN: 0x7F6E80e212B672D6E3119e306fC21cCeA1ebfEBb
strategyREN: 0x593DfE385D492362c3Cf72E910506DDc87c7444a
stableDebtSNX: 0x357464357fEf20f81E378540021484ba26AD445f
variableDebtSNX: 0x759E815A953b448fef878Aa5FAE5413E7334b16C
stableDebtSUSD: 0xdB9150072e88Be3F2C76bdCF1D4D8E7Fc2127677
variableDebtSUSD: 0xFC5f4b9bac00225797Df042bec3e3F446f8F17A6
aSNX: 0x523A296f6c4bE44059Cc623B36950be478127Ac2
strategySNX: 0x41ADFE049b2a3B216e493335a092a791f3595045
aSUSD: 0xa91Ebe197dcC54d01a20df37D9f53BdB11F48121
strategySUSD: 0x17c9215A4489Cb2a4d8a418ff30866b74f399056
stableDebtTUSD: 0xb73EB2C36781F3A8414736858F973950788Db13f
variableDebtTUSD: 0x51F0cf9248d20E3b1F61483c54e7D5702391e7A0
stableDebtUSDC: 0xa47550903565119794AC205823D7c2A2Af4170e1
variableDebtUSDC: 0xea0EB13123140D28ba0EAca4bE44616d9E967280
aTUSD: 0x85fefE81DCEfB6dc36CFc5a1d21d82ee4418fA09
strategyTUSD: 0x1c8e115292c0e909db3a5C98BC07893416f3C243
aUSDC: 0x0FBf3FF4Cc65c70bFf3578F2c373ad83Efa460f3
strategyUSDC: 0xf5C3776395a3a88Cd2c3458D0f46D8172A386134
stableDebtUSDT: 0x341cF2FC1418294648926D418fBAaCC7B1DA0a81
variableDebtUSDT: 0xBbeC4F9c6659900cc725Aa21002dA7147254fE7a
stableDebtWBTC: 0xC21D9A52a759927980A114d965Be9941621DA293
variableDebtWBTC: 0x7015606aa4dA5546031BcD354d95Faf3E093E4F0
aUSDT: 0x5882bcc81b5f7F1E2a6D4c72a345930856DE4476
strategyUSDT: 0xfb9Ff954EF9a706Fa2A509231C1F5c44EfCa6762
aWBTC: 0x38260Bec4C1b6C8d80808e4193dDe3e093B9aB1F
strategyWBTC: 0x434ff4e655A9e109212aAD9B9131248743aDFa67
stableDebtWETH: 0x1d8Ff7492a3B07A39Cdca4ceE65e915542E3B35A
variableDebtWETH: 0xB313781055314f16f656789BE39d553CB088D5Da
stableDebtYFI: 0x5b50d711898C11e8EEfdC540E59DbfA8AD9755c2
variableDebtYFI: 0x159e4592d5C9B2dCb8Fcedf3FE6610A1a8c17138
aWETH: 0x0907Deb1c36c49605208A3DD49B9c7778F1A327A
strategyWETH: 0x8757481002DCD9cB0FFd469FD3657Ded7b4525E0
aYFI: 0x25D4e51B9DCb022B2fbAC69262229A80a2451CD3
strategyYFI: 0xcDA3d573206507eEaf1d3FFD98F07D462231d129
stableDebtZRX: 0x8c9537b2dC2062824B10ED2A2C81faeA6bA2028A
variableDebtZRX: 0x09261C6541DC453B8535D072E4041C37d2AC3f22
aZRX: 0x9f1877d6cA07F7601Ff00d4CBEC7Cd5B4B8c53ed
strategyZRX: 0xf9499bf76dE6d1cf887f97541fa7717d38E508De
DelegationAwareAToken: 0x5B43F9508544f1C7A578e1DffCAda8F650bB6Cc4
StableDebtToken: 0x29Bdcb47B071D108b4ACcc831fC6235F88A34F5A
VariableDebtToken: 0x97DA36cAAC52F5acb64A52D49eD8a857eF327914
DefaultReserveInterestRateStrategy: 0x96877f0540819d44D69Fd93E2b83103493999436
HexTestToken: 0x0D3123B244EF96633156a5059C0d82655EAfCfa9
MockAggregator: 0xEdc8acB70274563C18994bA872a137D1c34888Bd
LendingPoolCollateralManagerImpl: 0x85c8d563D3548C44e758716D760C188198b270a1
LendingPoolCollateralManager: 0x85c8d563D3548C44e758716D760C188198b270a1
WalletBalanceProvider: 0x9A271db798fE24d105F9A4B0b1293A77bad3CB3F
WETHGateway: 0x086E0C9f15079A3FF5a0359247758453Ed697D65
```

## What is Aave?

Aave is a decentralized non-custodial liquidity markets protocol where users can participate as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, while borrowers are able to borrow in an overcollateralized (perpetually) or undercollateralized (one-block liquidity) fashion.

## Documentation

The documentation of Aave V2 is in the following [Aave V2 documentation](https://docs.aave.com/v2/-MJXUluJ2u1DiL-VU6MM) link. At the documentation you can learn more about the protocol, see the contract interfaces, integration guides and audits.

For getting the latest contracts addresses, please check the [Deployed contracts](https://docs.aave.com/v2/-MJXUluJ2u1DiL-VU6MM/deployed-contracts) page at the documentation to stay up to date.

## Connect with the community

You can join at the [Discord](https://discord.com/invite/CJm5Jt3) channel or at the [Governance Forum](https://governance.aave.com/) for asking questions about the protocol or talk about Aave with other peers.

## Setup

The repository uses Docker Compose to manage sensitive keys and load the configuration. Prior any action like test or deploy, you must run `docker-compose up` to start the `contracts-env` container, and then connect to the container console via `docker-compose exec contracts-env bash`.

Follow the next steps to setup the repository:

- Install `docker` and `docker-compose`
- Create an enviroment file named `.env` and fill the next enviroment variables

```
# Mnemonic, only first address will be used
MNEMONIC=""

# Add Alchemy or Infura provider keys, alchemy takes preference at the config level
ALCHEMY_KEY=""
INFURA_KEY=""


# Optional Etherscan key, for automatize the verification of the contracts at Etherscan
ETHERSCAN_KEY=""

# Optional, if you plan to use Tenderly scripts
TENDERLY_PROJECT=""
TENDERLY_USERNAME=""

```

## Markets configuration

The configurations related with the Aave Markets are located at `markets` directory. You can follow the `IAaveConfiguration` interface to create new Markets configuration or extend the current Aave configuration.

Each market should have his own Market configuration file, and their own set of deployment tasks, using the Aave market config and tasks as a reference.

## Test

You can run the full test suite with the following commands:

```
# In one terminal
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run test
```

## Deployments

For deploying Aave Protocol V2, you can use the available scripts located at `package.json`. For a complete list, run `npm run` to see all the tasks.

### Kovan deployment

```
# In one terminal
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run aave:kovan:full:migration
```

### Mainnet fork deployment

You can deploy Aave Protocol v2 in a forked Mainnet chain using Hardhat built-in feature:

```
# In one terminal, run a hardhat note with mainnet fork enabled
MAINNET_FORK=true npx hardhat node

# In another terminal, run docker-compose
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run aave:fork:main

# Contracts are now deployed at Hardhat node with Mainnet fork.

# You can interact with them via Hardhat console
MAINNET_FORK=true npx hardhat console
# Or your custom Hardhat task
MAINNET_FORK=true npx hardhat your-custom-task

```

### Mainnet fork - Run the check list

For testing the deployment scripts for Mainnet release, you can run the check-list tests in a Mainnet fork using Hardhat built-in feature:

```
# In another terminal, run docker-compose
docker-compose up

# Open another tab or terminal
docker-compose exec contracts-env bash

# A new Bash terminal is prompted, connected to the container
npm run test:main:check-list
```
