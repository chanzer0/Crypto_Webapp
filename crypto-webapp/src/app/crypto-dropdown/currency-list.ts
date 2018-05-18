export class CurrencyList {
    /*
   * Important currencies
   * currency_list [] - 
   * 
   */
  private currency_list: string[] = [
    "1ST (FirstBlood)", "2GIVE (GiveCoin)", "808 (808Coin)", "AC (AsiaCoin)", // 0-3
    "ACT (Achain)", "ADA (Cardano)", "ADT (adToken)", "ADX (AdEx)", // 4-7
    "AE (Aeternity)", "AEON (Aeon)", "AGI (SingularityNET)", "AGRS (IDNI-Agoras)", // 8-11
    "AI (POLY-AI)", "AION (Aion)", "AIR (AirToken)", "AKY (Akuya-Coin)", // 12-15
    "ALIS (ALIS)", "AMBER (AmberCoin)", "AMP (Synereo)", "ANC (Anoncoin)", // 16-19
    "ANT (Aragon)", "APPC (AppCoins)", "APX (APX-Ventures)", "ARDR (Ardor)", // 20-23
    "ARK (Ark)", "AST (AirSwap)", "ATB (ATBCoin)", "ATM (ATMChain)", // 24-27
    "ATS (Authorship)", "AUR (Auroracoin)", "AVT (Aventus)", "B3 (B3Coin)", // 28-31
    "BAT (Basic-Attention-Token)", "BAY (BitBay)", "BBR (Boolberry)", "BCAP (BCAP)", // 32-35
    "BCC (BitConnect)", "BCD (Bitcoin-Diamond)", "BCH (Bitcoin-Cash)", "BCN (Bytecoin)", // 36-39
    "BCX (BitcoinX)", "BCY (BitCrystals)", "BDL (Bitdeal)", "BELA (BelaCoin)", // 40-43
    "BET (DAO-Casino)", "BIS (Bismuth)", "BITB (BitBean)", "BITBTC (BitBTC)", // 44-47
    "BITCNY (BitCNY)", "BITEUR (BitEUR)", "BITGOLD (BitGOLD)", "BITSILVER (BitSILVER)", // 48-51
    "BITUSD (BitUSD)", "BIX (Bibox-Token)", "BLITZ (Blitzcash)", "BLK (Blackcoin)", // 52-55
    "BLN (Bolenum)", "BLOCK (Blocknet)", "BMC (Blackmoon-Crypto)", "BNB (Binance-Coin)", // 56-59
    "BNT (Bancor-Network-Token)", "BNTY (Bounty0x)", "BOST (BoostCoin)", "BOT (Bodhi)", // 60-63
    "BQ (bitqy)", "BRD (Bread)", "BTA (Bata)", "BTC (Bitcoin)", // 64-67
    "BTCD (BitcoinDark)", "BTG (Bitcoin-Gold)", "BTM (Bitmark)", "BTS (BitShares)", // 68-71
    "BTSR (BTSR)", "BTX (Bitcore)", "BURST (Burstcoin)", "BUZZ (BuzzCoin)", // 72-75
    "BYC (Bytecent)", "BYTOM (Bytom)", "CANN (CannabisCoin)", "CAT (BlockCAT)", // 76-79
    "CCRB (CryptoCarbon)", "CDT (Coindash)", "CFI (Cofound-it)", "CHIPS (Chips)", // 80-83
    "CLAM (Clams)", "CLOAK (CloakCoin)", "CMP (Compcoin)", "CMT (CyberMiles)", // 84-87
    "CND (Cindicator)", "CNX (Cryptonex)", "COFI (CoinFi)", "COSS (COSS)", // 88-91
    "COVAL (Circuits-Of-Value)", "CRBIT (CreditBIT)", "CREA (CreativeCoin)", "CREDO (Credo)", // 92-95
    "CRW (Crown)", "CSNO (BitDice)", "CTR (Centra)", "CURE (CureCoin)", // 96-99
    "CVC (Civic)", "DAR (Darcrus)", "DASH (Dash)", "DATA (DATAcoin)", // 100-103
    "DAY (Chronologic)", "DBC (DeepBrain-Chain)", "DCN (Dentacoin)", "DCR (Decred)", // 104-107
    "DCT (DECENT)", "DDF (Digital-Developers-Fund)", "DENT (Dent)", "DFS (DFSCoin)", // 108-111
    "DGB (DigiByte)", "DGC (Digitalcoin)", "DGD (DigixDAO)", "DICE (Etheroll)", // 112-115
    "DLT (Agrello-Delta)", "DNT (district0x)", "DOGE (DogeCoin)", "DOPE (DopeCoin)", // 116-119
    "DRGN (Dragonchain)", "DTB (Databits)", "DYN (Dynamic)", "EAC (EarthCoin)", // 120-123
    "EBST (eBoost)", "EBTC (eBTC)", "ECC (ECC)", "ECN (E-coin)", // 124-127
    "EDG (Edgeless)", "EDO (Eidoo)", "ELA (Elastos)", "ELF (aelf)", // 128-131
    "ELIX (Elixir)", "EMB (Embercoin)", "EMC (Emercoin)", "EMC2 (Einsteinium)", // 132-135
    "ENG (Enigma)", "ENJ (Enjin-Coin)", "EOS (EOS)", "EOT (EOT-Token)", // 136-139
    "EQT (EquiTrader)", "ETC (Ethereum-Classic)", "ETH (Ethereum)", "ETHD (Ethereum-Dark)", // 140-143
    "ETHOS (Ethos)", "ETN (Electroneum)", "ETP (Metaverse-Entropy)", "ETT (EncryptoTel)", // 144-147
    "EVE (Devery)", "EVX (Everex)", "EXP (Expanse)", "FCT (Factom)", // 148-151
    "FLDC (FoldingCoin)", "FLO (FlorinCoin)", "FLT (FlutterCoin)", "FRST (FirstCoin)", // 152-155
    "FTC (Feathercoin)", "FUEL (Etherparty)", "FUN (FunFair)", "GAM (Gambit)", // 156-159
    "GAME (GameCredits)", "GAS (Gas)", "GBG (Golos Gold)", "GBYTE (Byteball)", // 160-163
    "GCR (GCRCoin)", "GLD (GoldCoin)", "GNO (Gnosis-Token)", "GNT (Golem-Tokens)", // 164-167
    "GOLOS (Golos)", "GRC (Gridcoin)", "GRWI (Growers-International)", "GTO (Gifto)", // 168-171
    "GUP (Guppy)", "GVT (Genesis-Vision)", "GXS (GXShares)", "HBN (HoboNickels)", // 172-175
    "HEAT (HEAT)", "HMQ (Humaniq)", "HPB (High-Performance-Blockchain)", "HSR (Hshare)", // 176-179
    "HUSH (Hush)", "HVN (Hive)", "ICN (ICONOMI)", "ICX (ICON)", // 180-183
    "IFC (Infinitecoin)", "IFT (investFeed)", "IGNIS (Ignis)", "INCNT (Incent)", // 184-187
    "IND (Indorse-Token)", "INF (InfChain)", "INK (Ink)", "INS (INS-Ecosystem)", // 188-191
    "INXT (Internxt)", "IOC (IOCoin)", "ION (ION)", "IOP (Internet-of-People)", // 192-195
    "IOST (IOStoken)", "IOTA (IOTA)", "IQT (Iquant-Chain)", "ITC (IoT-Chain)", // 196-199
    "IXC (iXcoin)", "IXT (InsureX)", "JNT (Jibrel-Network)", "KCS (KuCoin)", // 200-203
    "KICK (KickCoin)", "KIN (KIN)", "KMD (Komodo)", "KNC (Kyber-Network)", // 204-207
    "KORE (KoreCoin)", "LBC (LBRY-Credits)", "LCC (Litecoin-Cash)", "LEND (EthLend)", // 208-211
    "LEV (Leverj)", "LGD (Legends-Room)", "LINDA (Linda)", "LINK (ChainLink)", // 212-215
    "LKK (Lykke)", "LMC (LoMoCoin)", "LOCI (LOCIcoin)", "LRC (Loopring)", // 216-219
    "LSK (Lisk)", "LTC (Litecoin)", "LUN (Lunyr)", "MAID (MaidSafeCoin)", // 220-223
    "MANA (Decentraland)", "MAX (Maxcoin)", "MBRS (Embers)", "MCAP (MCAP)", // 224-227
    "MCO (Monaco)", "MDA (Moeda-Loyalty-Points)", "MEC (Megacoin)", "MED (MediBlock)", // 228-231
    "MEME (Memetic)", "MER (Mercury)", "MGC (MergeCoin)", "MGO (MobileGo)", // 232-235
    "MINEX (Minex)", "MINT (Mintcoin)", "MKR (Maker)", "MLN (Melon)", // 236-239
    "MNE (Minereum)", "MNX (MinexCoin)", "MONA (MonaCoin)", "MRT (Miners-Reward-Token)", // 240-243
    "MSP (Mothership)", "MTH (Monetha)", "MTN (MedToken)", "MUE (MonetaryUnit)", // 244-247
    "MUSIC (Musicoin)", "MYB (MyBit-Token)", "MYST (Mysterium)", "MZC (Mazacoin)", // 248-251
    "NAMO (Namocoin)", "NAS (Nebulas-Token)", "NAV (Nav-Coin)", "NBT (NuBits)", // 252-255
    "NDC (NeverDie-Coin)", "NEBL (Neblio)", "NEO (NEO)", "NEOS (NeosCoin)", // 256-259
    "NET (Nimiq)", "NLC2 (NoLimitCoin)", "NLG (Gulden)", "NMC (Namecoin)", // 260-263
    "NMR (Numeraire)", "NOBL (NobleCoin)", "NOTE (DNotes)", "NSR (NuShares)", // 264-267
    "NTO (Fujinto)", "NULS(Nuls)", "NVC(Novacoin)", "NXC (Nexium)", // 268-271
    "NXS (Nexus)", "NXT (Nxt)", "OAX (openANX)", "OBITS (Obits)", // 272-275
    "OCL (Oceanlab)", "OCN (Odyssey)", "ODN (Obsidian)", "OF (OFCOIN)", // 276-279
    "OK (OKCash)", "OMG (OmiseGo)", "OMNI (Omni)", "ONION (DeepOnion)", // 280-283
    "OPT (Opus)", "OST (Simple-Token)", "PART (Particl)", "PASC (PascalCoin)", // 284-287
    "PAY (TenX)", "PBL (Pebbles)", "PBT (Primalbase-Token)", "PFR (Payfair)", // 288-291
    "PING (CryptoPing)", "PINK(Pinkcoin)", "PIVX(PIVX)", "PIX (Lampix)", // 292-295
    "PLBT (Polybius)", "PLR (Pillar)", "PLU (Pluton)", "POE (Poet)", // 296-299
    "POLY (Polymath)", "POSW (PoSW-Coin)", "POT (PotCoin)", "POWR (Power-Ledger)", // 300-303
    "PPC (Peercoin)", "PPT (Populous)", "PPY (Peerplays)", "PRG (Paragon-Coin)", // 304-307
    "PRL (Oyster-Pearl)", "PRO (Propy)", "PST (Primas)", "PTC (Pesetacoin)", // 308-311
    "PTOY (Patientory)", "PURA (Pura)", "QASH (QASH)", "QAU (Quantum)", // 312-315
    "QRK (Quark)", "QRL (Quantum-Resistant-Ledger)", "QSP (Quantstamp)", "QTL (Quatloo)", // 316-319
    "QTUM (Qtum)", "QWARK (Qwark)", "R (Revain)", "RADS (Radium)", // 320-323
    "RAIN (Condensate)", "RBIES (Rubies)", "RBX (Ripto-Bux)", "RBY (RubyCoin)", // 324-327
    "RCN (Ripio-Credit-Network)", "RDD (ReddCoin)", "RDN (Raiden-Network-Token)", "REC (Regalcoin)", // 328-331
    "RED (Redcoin)", "REP (Augur)", "REQ (Request-Network)", "RHOC (RChain)", // 332-335
    "RIC (Riecoin)", "RISE (Rise)", "RLC (RLC-Token)", "RLT (RouletteToken)", // 336-339
    "RRT (Recovery-Right-Tokens)", "RUP (Rupee)", "RVT (Rivetz)", "SAFEX (SafeExchangeCoin)", // 340-343
    "SALT (Salt)", "SAN (Santiment-Network-Token)", "SBD (Steem-Dollars)", "SBTC (Super-Bitcoin)", // 344-347
    "SC (Siacoin)", "SEQ (Sequence)", "SHIFT (SHIFT)", "SIGMA (SIGMAcoin)", // 348-351
    "SIGT (Signatum)", "SJCX (Storjcoin-X)", "SKIN (SkinCoin)", "SKY (Skycoin)", // 352-355
    "SLS (SaluS)", "SMART (SmartCash)", "SMT (SmartMesh)", "SNC (SunContract)", // 356-359
    "SNGLS (SingularDTV)", "SNM (SONM)", "SNRG (Synergy)", "SNT (Status-Network-Token)", // 360-363
    "SPANK (SpankChain)", "SPR (SpreadCoin)", "SRN (Sirin-Labs-Token)", "START (Startcoin)", // 364-367
    "STEEM (Steem)", "STK (STK-Token)", "STORJ (Storj)", "STRAT (Stratis)", // 368-371
    "STX (Stox)", "SUB (Substratum)", "SWT (Swarm-City)", "SYS (SysCoin)", // 372-375
    "TAAS (Taas)", "TAU (Lamden)", "TCC (The-ChampCoin)", "TFL (True-Flip)", // 376-379
    "THC (HempCoin)", "TIME (Time)", "TIX (Blocktix)", "TKN (TokenCard)", // 380-383
    "TKR (Trackr)", "TKS (Tokes)", "TNB (Time-New-Bank)", "TNT (Tierion)", // 384-387
    "TOA (ToaCoin)", "TRC (Terracoin)", "TRCT (Tracto)", "TRIG (Triggers)", // 388-391
    "TRST (Trustcoin)", "TRX (Tronix)", "UBQ (Ubiq)", "UKG (UnikoinGold)", // 392-395
    "ULA (Ulatech)", "UNITY (SuperNET)", "UNO (Unobtanium)", "UNY (Unity-Ingot)", // 396-399
    "URO (Uro)", "USDT (Tether)", "UTK (UTrust)", "VEE (BLOCKv)", // 400-403
    "VEN (VeChain)", "VERI (Veritaseum)", "VIA (Viacoin)", "VIB (Viberate)", // 404-407
    "VIVO (VIVO)", "VOISE (Voise)", "VOX (Voxels)", "VPN (VPNCoin)", // 408-411
    "VRC (Vericoin)", "VRM (Verium)", "VRS (Veros)", "VSL (vSlice)", // 412-415
    "VTC (Vertcoin)", "VTR (vTorrent)", "WABI (WaBi)", "WAVES (Waves)", // 416-419
    "WAX (Wax-Token)", "WCT (Waves-Community)", "WDC (WorldCoin)", "WGO (WavesGo)", // 420-423
    "WGR (Wagerr)", "WINGS (Wings)", "WTC (Walton)", "WTT (Giga-Watt-Token)", // 424-427
    "XAS (Asch)", "XAUR (Xaurum)", "XBC (Bitcoin-Plus)", "XBY (XtraBYtes)", // 428-431
    "XCN (Cryptonite)", "XCP (Counterparty)", "XDN (DigitalNote)", "XEL (Elastic)", // 432-435
    "XEM (NEM)", "XID (Sphere-Identity)", "XLM (Stellar)", "XMR (Monero)", // 436-439
    "XMT (Metal)", "XMY (Myriadcoin)", "XPM (Primecoin)", "XRB (RaiBlocks)", // 440-443
    "XRL (Rialto)", "XRP (Ripple)", "XSPEC (Spectrecoin)", "XST (Stealthcoin)", // 444-447
    "XTZ (Tezos)", "XUC (Exchange-Union)", "XVC (Vcash)", "XVG (Verge)", // 448-451
    "XWC (WhiteCoin)", "XZC (ZCoin)", "XZR (ZrCoin)", "YOYOW (YOYOW)", // 452-455
    "ZCC (ZcCoin)", "ZCL (Zclassic)", "ZEC (Zcash)", "ZEN (ZenCash)", // 456-459
    "ZET (Zetacoin)", "ZRX (0x)" // 460-462
  ]

    getCurrencyList(){
        return this.currency_list;
    }
}
