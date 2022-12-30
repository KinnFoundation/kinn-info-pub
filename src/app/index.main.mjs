// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    appLaunch: []
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Object({
    closed: ctc3,
    manager: ctc0,
    price: ctc1,
    token: ctc2,
    tokenAmount: ctc1,
    tokenSupply: ctc1,
    tokenUnit: ctc1
    });
  const ctc7 = stdlib.T_Struct([['manager', ctc0], ['closed', ctc3], ['token', ctc2], ['tokenAmount', ctc1], ['tokenUnit', ctc1], ['tokenSupply', ctc1], ['price', ctc1]]);
  
  const _state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v2897, v2898, v2900, v2905, v2915] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v2900, v6061, v6062, v6063, v6064, v6065, v6066, v6067] = svs;
      return (await ((async () => {
        
        const v6068 = {
          closed: v6062,
          manager: v6061,
          price: v6067,
          token: v6063,
          tokenAmount: v6064,
          tokenSupply: v6066,
          tokenUnit: v6065
          };
        
        return v6068;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024] = svs;
      return (await ((async () => {
        
        const v3025 = {
          closed: v3019,
          manager: v3018,
          price: v3024,
          token: v3020,
          tokenAmount: v3021,
          tokenSupply: v3023,
          tokenUnit: v3022
          };
        
        return v3025;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      state: {
        decode: _state,
        ty: ctc7
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc5, ctc1],
      4: [ctc2, ctc0, ctc3, ctc2, ctc1, ctc1, ctc1, ctc1],
      6: [ctc2, ctc6, ctc5, ctc1, ctc0, ctc3, ctc2, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Constructor(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Constructor expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Constructor expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    addr: ctc0,
    amt: ctc1,
    tok0: ctc2,
    ttl: ctc1
    });
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Data({
    buy0_281: ctc4,
    close0_281: ctc5,
    deposit0_281: ctc4,
    grant0_281: ctc6,
    touch0_281: ctc5,
    updatePrice0_281: ctc4,
    updateTokenUnit0_281: ctc4,
    withdraw0_281: ctc4
    });
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v2880 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2881 = [v2880];
  const v2887 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:30:67:application',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:29:19:application call to [unknown function] (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:29:23:function exp)', 'at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:98:45:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:28:40:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:91:3:function exp)'],
    msg: 'getParams',
    who: 'Constructor'
    });
  const v2888 = v2887.addr;
  const v2889 = v2887.amt;
  const v2890 = v2887.tok0;
  const v2891 = v2887.ttl;
  
  const txn1 = await (ctc.sendrecv({
    args: [v2888, v2889, v2891, v2890],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2897, v2898, v2899, v2900], secs: v2902, time: v2901, didSend: v46, from: v2896 } = txn1;
      
      const v2903 = v2881[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
      const v2904 = stdlib.Array_set(v2903, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
      const v2905 = stdlib.Array_set(v2881, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2904);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v2900
        });
      ;
      const v2915 = stdlib.safeAdd(v2901, v2899);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v2897, v2898, v2899, v2900], secs: v2902, time: v2901, didSend: v46, from: v2896 } = txn1;
  const v2903 = v2881[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v2904 = stdlib.Array_set(v2903, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v2905 = stdlib.Array_set(v2881, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2904);
  ;
  ;
  const v2915 = stdlib.safeAdd(v2901, v2899);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc1, ctc1, ctc1],
    timeoutAt: ['time', v2915],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v2897, v2898, v2900, v2905, v2915],
      evt_cnt: 0,
      funcNum: 2,
      lct: v2901,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:125:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v6079, time: v6078, didSend: v2627, from: v6077 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2900
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc11, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v6079, time: v6078, didSend: v2627, from: v6077 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v2936, v2937, v2938], secs: v2940, time: v2939, didSend: v199, from: v2935 } = txn2;
    const v2941 = stdlib.gt(v2936, stdlib.checkedBigNumberify('./interface.rsh:116:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2941, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Constructor'
      });
    const v2943 = stdlib.gt(v2938, stdlib.checkedBigNumberify('./interface.rsh:117:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2943, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Constructor'
      });
    const v2945 = stdlib.gt(v2937, stdlib.checkedBigNumberify('./interface.rsh:118:25:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2945, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenUnit must be greater than 0',
      who: 'Constructor'
      });
    const v2947 = stdlib.safeMod(v2936, v2937);
    const v2948 = stdlib.eq(v2947, stdlib.checkedBigNumberify('./interface.rsh:120:37:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2948, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenAmount must be divisible by tokenUnit',
      who: 'Constructor'
      });
    ;
    const v2952 = v2905[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
    const v2953 = v2952[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
    const v2954 = stdlib.safeAdd(v2953, v2936);
    const v2956 = stdlib.Array_set(v2952, '0', v2954);
    const v2957 = stdlib.Array_set(v2905, stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0'), v2956);
    ;
    const v2961 = stdlib.safeSub(v2898, v2898);
    ;
    null;
    const v2962 = {
      closed: false,
      manager: v2935,
      price: v2938,
      token: v2900,
      tokenAmount: v2936,
      tokenSupply: v2936,
      tokenUnit: v2937
      };
    let v2963 = v2962;
    let v2964 = v2939;
    let v2970 = v2957;
    let v2971 = v2961;
    
    while (await (async () => {
      const v3010 = v2963.closed;
      const v3017 = v3010 ? false : true;
      
      return v3017;})()) {
      const v3018 = v2963.manager;
      const v3019 = v2963.closed;
      const v3020 = v2963.token;
      const v3021 = v2963.tokenAmount;
      const v3022 = v2963.tokenUnit;
      const v3023 = v2963.tokenSupply;
      const v3024 = v2963.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn3;
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          undefined /* setApiDetails */;
          const v3250 = v3245[stdlib.checkedBigNumberify('./interface.rsh:265:10:spread', stdlib.UInt_max, '0')];
          const v3252 = stdlib.safeMul(v3250, v3022);
          const v3254 = stdlib.le(v3252, v3021);
          stdlib.assert(v3254, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:265:24:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Constructor'
            });
          const v3257 = stdlib.safeMul(v3250, v3024);
          const v3317 = stdlib.safeAdd(v2971, v3257);
          ;
          const v3318 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3319 = v3318[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3322 = stdlib.Array_set(v3318, '0', v3319);
          const v3323 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3322);
          ;
          const v3332 = null;
          await txn3.getOutput('buy', 'v3332', ctc8, v3332);
          const v3345 = stdlib.safeSub(v3317, v3257);
          ;
          const v3348 = v3323[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3349 = v3348[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3353 = stdlib.safeSub(v3349, v3252);
          const v3355 = stdlib.Array_set(v3348, '0', v3353);
          const v3356 = stdlib.Array_set(v3323, stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0'), v3355);
          ;
          const v3367 = stdlib.safeSub(v3021, v3252);
          const v3368 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3367,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v3368;
          const cv2964 = v3243;
          const cv2970 = v3356;
          const cv2971 = v3345;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v3670 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3671 = v3670[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3674 = stdlib.Array_set(v3670, '0', v3671);
          const v3675 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3674);
          ;
          const v3725 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v3725, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:287:13:application call to [unknown function] (defined at: ./interface.rsh:287:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can close',
            who: 'Constructor'
            });
          const v3727 = null;
          await txn3.getOutput('close', 'v3727', ctc8, v3727);
          const v3735 = v3675[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3736 = v3735[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3740 = stdlib.safeSub(v3736, v3021);
          const v3742 = stdlib.Array_set(v3735, '0', v3740);
          const v3743 = stdlib.Array_set(v3675, stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0'), v3742);
          ;
          const v3751 = {
            closed: true,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenUnit: v3022
            };
          const cv2963 = v3751;
          const cv2964 = v3243;
          const cv2970 = v3743;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          undefined /* setApiDetails */;
          const v3974 = v3949[stdlib.checkedBigNumberify('./interface.rsh:174:10:spread', stdlib.UInt_max, '0')];
          const v3976 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v3976, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can deposit',
            who: 'Constructor'
            });
          const v3978 = stdlib.gt(v3974, stdlib.checkedBigNumberify('./interface.rsh:176:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3978, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'deposit must be greater than 0',
            who: 'Constructor'
            });
          const v3981 = stdlib.safeMul(v3974, v3022);
          ;
          const v4022 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4023 = v4022[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4024 = stdlib.safeAdd(v4023, v3981);
          const v4026 = stdlib.Array_set(v4022, '0', v4024);
          const v4027 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4026);
          ;
          const v4114 = null;
          await txn3.getOutput('deposit', 'v4114', ctc8, v4114);
          const v4131 = stdlib.safeAdd(v3021, v3981);
          const v4135 = stdlib.safeAdd(v3023, v3981);
          const v4136 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v4131,
            tokenSupply: v4135,
            tokenUnit: v3022
            };
          const cv2963 = v4136;
          const cv2964 = v3243;
          const cv2970 = v4027;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v4374 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4375 = v4374[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4378 = stdlib.Array_set(v4374, '0', v4375);
          const v4379 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4378);
          ;
          const v4492 = v4301[stdlib.checkedBigNumberify('./interface.rsh:249:10:spread', stdlib.UInt_max, '0')];
          const v4494 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v4494, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:250:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:252:13:application call to [unknown function] (defined at: ./interface.rsh:252:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Constructor'
            });
          const v4497 = null;
          await txn3.getOutput('grant', 'v4497', ctc8, v4497);
          const v4511 = {
            closed: v3019,
            manager: v4492,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v4511;
          const cv2964 = v3243;
          const cv2970 = v4379;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v4726 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4727 = v4726[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4730 = stdlib.Array_set(v4726, '0', v4727);
          const v4731 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4730);
          ;
          const v4868 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v4868, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:163:13:application call to [unknown function] (defined at: ./interface.rsh:163:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can touch',
            who: 'Constructor'
            });
          const v4870 = null;
          await txn3.getOutput('touch', 'v4870', ctc8, v4870);
          const v4877 = (stdlib.le(await ctc.getBalance(), v2971) ? stdlib.checkedBigNumberify('./interface.rsh:165:38:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2971));
          const v4878 = stdlib.safeAdd(v4877, v2971);
          const v4879 = v4731[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4880 = v4879[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4881 = (stdlib.le(await ctc.getBalance(v2900), v4880) ? stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2900), v4880));
          const v4882 = stdlib.safeAdd(v4881, v4880);
          const v4884 = stdlib.Array_set(v4879, '0', v4882);
          const v4885 = stdlib.Array_set(v4731, stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0'), v4884);
          const v4890 = stdlib.safeSub(v4878, v4877);
          ;
          const v4891 = v4885[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4892 = v4891[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4896 = stdlib.safeSub(v4892, v4881);
          const v4898 = stdlib.Array_set(v4891, '0', v4896);
          const v4899 = stdlib.Array_set(v4885, stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0'), v4898);
          ;
          const cv2963 = v2963;
          const cv2964 = v3243;
          const cv2970 = v4899;
          const cv2971 = v4890;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5078 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5079 = v5078[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5082 = stdlib.Array_set(v5078, '0', v5079);
          const v5083 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5082);
          ;
          const v5254 = v5005[stdlib.checkedBigNumberify('./interface.rsh:216:10:spread', stdlib.UInt_max, '0')];
          const v5256 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v5256, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can update',
            who: 'Constructor'
            });
          const v5258 = stdlib.gt(v5254, stdlib.checkedBigNumberify('./interface.rsh:218:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5258, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Constructor'
            });
          const v5261 = null;
          await txn3.getOutput('updatePrice', 'v5261', ctc8, v5261);
          const v5275 = {
            closed: v3019,
            manager: v3018,
            price: v5254,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v5275;
          const cv2964 = v3243;
          const cv2970 = v5083;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5430 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5431 = v5430[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5434 = stdlib.Array_set(v5430, '0', v5431);
          const v5435 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5434);
          ;
          const v5631 = v5357[stdlib.checkedBigNumberify('./interface.rsh:231:10:spread', stdlib.UInt_max, '0')];
          const v5633 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v5633, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can update',
            who: 'Constructor'
            });
          const v5635 = stdlib.gt(v5631, stdlib.checkedBigNumberify('./interface.rsh:233:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5635, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'tokenUnit must be greater than 0',
            who: 'Constructor'
            });
          const v5638 = stdlib.safeMod(v3021, v5631);
          const v5639 = stdlib.eq(v5638, stdlib.checkedBigNumberify('./interface.rsh:234:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5639, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'tokenAmount must be divisible by tokenUnit',
            who: 'Constructor'
            });
          const v5642 = null;
          await txn3.getOutput('updateTokenUnit', 'v5642', ctc8, v5642);
          const v5656 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v5631
            };
          const cv2963 = v5656;
          const cv2964 = v3243;
          const cv2970 = v5435;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5782 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5783 = v5782[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5786 = stdlib.Array_set(v5782, '0', v5783);
          const v5787 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5786);
          ;
          const v6012 = v5709[stdlib.checkedBigNumberify('./interface.rsh:193:10:spread', stdlib.UInt_max, '0')];
          const v6014 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v6014, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can withdraw',
            who: 'Constructor'
            });
          const v6016 = stdlib.gt(v6012, stdlib.checkedBigNumberify('./interface.rsh:195:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v6016, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'withdraw must be greater than 0',
            who: 'Constructor'
            });
          const v6019 = stdlib.safeMul(v6012, v3022);
          const v6021 = stdlib.le(v6019, v3021);
          stdlib.assert(v6021, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'withdraw must be less than or equal to token amount',
            who: 'Constructor'
            });
          const v6024 = null;
          await txn3.getOutput('withdraw', 'v6024', ctc8, v6024);
          const v6034 = v5787[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6035 = v6034[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6039 = stdlib.safeSub(v6035, v6019);
          const v6041 = stdlib.Array_set(v6034, '0', v6039);
          const v6042 = stdlib.Array_set(v5787, stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0'), v6041);
          ;
          const v6053 = stdlib.safeSub(v3021, v6019);
          const v6057 = stdlib.safeSub(v3023, v6019);
          const v6058 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v6053,
            tokenSupply: v6057,
            tokenUnit: v3022
            };
          const cv2963 = v6058;
          const cv2964 = v3243;
          const cv2970 = v6042;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        }
      
      }
    const v6061 = v2963.manager;
    const v6062 = v2963.closed;
    const v6063 = v2963.token;
    const v6064 = v2963.tokenAmount;
    const v6065 = v2963.tokenUnit;
    const v6066 = v2963.tokenSupply;
    const v6067 = v2963.price;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v6071, time: v6070, didSend: v2607, from: v6069 } = txn3;
    ;
    return;
    
    
    }
  
  
  
  };
export async function Manager(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Manager expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Manager expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    price: ctc1,
    tokenAmount: ctc1,
    tokenUnit: ctc1
    });
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Data({
    buy0_281: ctc4,
    close0_281: ctc5,
    deposit0_281: ctc4,
    grant0_281: ctc6,
    touch0_281: ctc5,
    updatePrice0_281: ctc4,
    updateTokenUnit0_281: ctc4,
    withdraw0_281: ctc4
    });
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc1, ctc9]);
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v2880 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2881 = [v2880];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2897, v2898, v2899, v2900], secs: v2902, time: v2901, didSend: v46, from: v2896 } = txn1;
  const v2903 = v2881[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v2904 = stdlib.Array_set(v2903, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v2905 = stdlib.Array_set(v2881, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2904);
  ;
  ;
  const v2915 = stdlib.safeAdd(v2901, v2899);
  const v2919 = stdlib.protect(ctc3, await interact.getParams(), {
    at: './interface.rsh:111:76:application',
    fs: ['at ./interface.rsh:110:15:application call to [unknown function] (defined at: ./interface.rsh:110:19:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'getParams',
    who: 'Manager'
    });
  const v2920 = v2919.price;
  const v2921 = v2919.tokenAmount;
  const v2922 = v2919.tokenUnit;
  
  const v2926 = stdlib.gt(v2921, stdlib.checkedBigNumberify('./interface.rsh:116:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2926, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'tokenAmount must be greater than 0',
    who: 'Manager'
    });
  const v2928 = stdlib.gt(v2920, stdlib.checkedBigNumberify('./interface.rsh:117:21:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2928, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'price must be greater than 0',
    who: 'Manager'
    });
  const v2930 = stdlib.gt(v2922, stdlib.checkedBigNumberify('./interface.rsh:118:25:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2930, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'tokenUnit must be greater than 0',
    who: 'Manager'
    });
  const v2932 = stdlib.safeMod(v2921, v2922);
  const v2933 = stdlib.eq(v2932, stdlib.checkedBigNumberify('./interface.rsh:120:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2933, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'tokenAmount must be divisible by tokenUnit',
    who: 'Manager'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v2897, v2898, v2900, v2905, v2915, v2921, v2922, v2920],
    evt_cnt: 3,
    funcNum: 1,
    lct: v2901,
    onlyIf: true,
    out_tys: [ctc1, ctc1, ctc1],
    pay: [v2898, [[v2921, v2900]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2936, v2937, v2938], secs: v2940, time: v2939, didSend: v199, from: v2935 } = txn2;
      
      sim_r.txns.push({
        amt: v2898,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2952 = v2905[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
      const v2953 = v2952[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
      const v2954 = stdlib.safeAdd(v2953, v2936);
      const v2956 = stdlib.Array_set(v2952, '0', v2954);
      const v2957 = stdlib.Array_set(v2905, stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0'), v2956);
      sim_r.txns.push({
        amt: v2936,
        kind: 'to',
        tok: v2900
        });
      const v2961 = stdlib.safeSub(v2898, v2898);
      sim_r.txns.push({
        kind: 'from',
        to: v2897,
        tok: undefined /* Nothing */
        });
      null;
      const v2962 = {
        closed: false,
        manager: v2935,
        price: v2938,
        token: v2900,
        tokenAmount: v2936,
        tokenSupply: v2936,
        tokenUnit: v2937
        };
      const v2963 = v2962;
      const v2964 = v2939;
      const v2970 = v2957;
      const v2971 = v2961;
      
      if (await (async () => {
        const v3010 = v2963.closed;
        const v3017 = v3010 ? false : true;
        
        return v3017;})()) {
        const v3018 = v2963.manager;
        const v3019 = v2963.closed;
        const v3020 = v2963.token;
        const v3021 = v2963.tokenAmount;
        const v3022 = v2963.tokenUnit;
        const v3023 = v2963.tokenSupply;
        const v3024 = v2963.price;
        sim_r.isHalt = false;
        }
      else {
        const v6061 = v2963.manager;
        const v6062 = v2963.closed;
        const v6063 = v2963.token;
        const v6064 = v2963.tokenAmount;
        const v6065 = v2963.tokenUnit;
        const v6066 = v2963.tokenSupply;
        const v6067 = v2963.price;
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v2915],
    tys: [ctc0, ctc1, ctc2, ctc11, ctc1, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v2897, v2898, v2900, v2905, v2915],
      evt_cnt: 0,
      funcNum: 2,
      lct: v2901,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:125:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v6079, time: v6078, didSend: v2627, from: v6077 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2900
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc11, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v6079, time: v6078, didSend: v2627, from: v6077 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v2936, v2937, v2938], secs: v2940, time: v2939, didSend: v199, from: v2935 } = txn2;
    const v2941 = stdlib.gt(v2936, stdlib.checkedBigNumberify('./interface.rsh:116:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2941, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Manager'
      });
    const v2943 = stdlib.gt(v2938, stdlib.checkedBigNumberify('./interface.rsh:117:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2943, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Manager'
      });
    const v2945 = stdlib.gt(v2937, stdlib.checkedBigNumberify('./interface.rsh:118:25:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2945, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenUnit must be greater than 0',
      who: 'Manager'
      });
    const v2947 = stdlib.safeMod(v2936, v2937);
    const v2948 = stdlib.eq(v2947, stdlib.checkedBigNumberify('./interface.rsh:120:37:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2948, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenAmount must be divisible by tokenUnit',
      who: 'Manager'
      });
    ;
    const v2952 = v2905[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
    const v2953 = v2952[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
    const v2954 = stdlib.safeAdd(v2953, v2936);
    const v2956 = stdlib.Array_set(v2952, '0', v2954);
    const v2957 = stdlib.Array_set(v2905, stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0'), v2956);
    ;
    const v2961 = stdlib.safeSub(v2898, v2898);
    ;
    null;
    const v2962 = {
      closed: false,
      manager: v2935,
      price: v2938,
      token: v2900,
      tokenAmount: v2936,
      tokenSupply: v2936,
      tokenUnit: v2937
      };
    let v2963 = v2962;
    let v2964 = v2939;
    let v2970 = v2957;
    let v2971 = v2961;
    
    while (await (async () => {
      const v3010 = v2963.closed;
      const v3017 = v3010 ? false : true;
      
      return v3017;})()) {
      const v3018 = v2963.manager;
      const v3019 = v2963.closed;
      const v3020 = v2963.token;
      const v3021 = v2963.tokenAmount;
      const v3022 = v2963.tokenUnit;
      const v3023 = v2963.tokenSupply;
      const v3024 = v2963.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc7],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn3;
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          undefined /* setApiDetails */;
          const v3250 = v3245[stdlib.checkedBigNumberify('./interface.rsh:265:10:spread', stdlib.UInt_max, '0')];
          const v3252 = stdlib.safeMul(v3250, v3022);
          const v3254 = stdlib.le(v3252, v3021);
          stdlib.assert(v3254, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:265:24:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Manager'
            });
          const v3257 = stdlib.safeMul(v3250, v3024);
          const v3317 = stdlib.safeAdd(v2971, v3257);
          ;
          const v3318 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3319 = v3318[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3322 = stdlib.Array_set(v3318, '0', v3319);
          const v3323 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3322);
          ;
          const v3332 = null;
          await txn3.getOutput('buy', 'v3332', ctc8, v3332);
          const v3345 = stdlib.safeSub(v3317, v3257);
          ;
          const v3348 = v3323[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3349 = v3348[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3353 = stdlib.safeSub(v3349, v3252);
          const v3355 = stdlib.Array_set(v3348, '0', v3353);
          const v3356 = stdlib.Array_set(v3323, stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0'), v3355);
          ;
          const v3367 = stdlib.safeSub(v3021, v3252);
          const v3368 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3367,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v3368;
          const cv2964 = v3243;
          const cv2970 = v3356;
          const cv2971 = v3345;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v3670 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3671 = v3670[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3674 = stdlib.Array_set(v3670, '0', v3671);
          const v3675 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3674);
          ;
          const v3725 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v3725, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:287:13:application call to [unknown function] (defined at: ./interface.rsh:287:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can close',
            who: 'Manager'
            });
          const v3727 = null;
          await txn3.getOutput('close', 'v3727', ctc8, v3727);
          const v3735 = v3675[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3736 = v3735[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3740 = stdlib.safeSub(v3736, v3021);
          const v3742 = stdlib.Array_set(v3735, '0', v3740);
          const v3743 = stdlib.Array_set(v3675, stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0'), v3742);
          ;
          const v3751 = {
            closed: true,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenUnit: v3022
            };
          const cv2963 = v3751;
          const cv2964 = v3243;
          const cv2970 = v3743;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          undefined /* setApiDetails */;
          const v3974 = v3949[stdlib.checkedBigNumberify('./interface.rsh:174:10:spread', stdlib.UInt_max, '0')];
          const v3976 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v3976, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can deposit',
            who: 'Manager'
            });
          const v3978 = stdlib.gt(v3974, stdlib.checkedBigNumberify('./interface.rsh:176:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3978, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'deposit must be greater than 0',
            who: 'Manager'
            });
          const v3981 = stdlib.safeMul(v3974, v3022);
          ;
          const v4022 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4023 = v4022[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4024 = stdlib.safeAdd(v4023, v3981);
          const v4026 = stdlib.Array_set(v4022, '0', v4024);
          const v4027 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4026);
          ;
          const v4114 = null;
          await txn3.getOutput('deposit', 'v4114', ctc8, v4114);
          const v4131 = stdlib.safeAdd(v3021, v3981);
          const v4135 = stdlib.safeAdd(v3023, v3981);
          const v4136 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v4131,
            tokenSupply: v4135,
            tokenUnit: v3022
            };
          const cv2963 = v4136;
          const cv2964 = v3243;
          const cv2970 = v4027;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v4374 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4375 = v4374[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4378 = stdlib.Array_set(v4374, '0', v4375);
          const v4379 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4378);
          ;
          const v4492 = v4301[stdlib.checkedBigNumberify('./interface.rsh:249:10:spread', stdlib.UInt_max, '0')];
          const v4494 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v4494, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:250:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:252:13:application call to [unknown function] (defined at: ./interface.rsh:252:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Manager'
            });
          const v4497 = null;
          await txn3.getOutput('grant', 'v4497', ctc8, v4497);
          const v4511 = {
            closed: v3019,
            manager: v4492,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v4511;
          const cv2964 = v3243;
          const cv2970 = v4379;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v4726 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4727 = v4726[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4730 = stdlib.Array_set(v4726, '0', v4727);
          const v4731 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4730);
          ;
          const v4868 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v4868, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:163:13:application call to [unknown function] (defined at: ./interface.rsh:163:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can touch',
            who: 'Manager'
            });
          const v4870 = null;
          await txn3.getOutput('touch', 'v4870', ctc8, v4870);
          const v4877 = (stdlib.le(await ctc.getBalance(), v2971) ? stdlib.checkedBigNumberify('./interface.rsh:165:38:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2971));
          const v4878 = stdlib.safeAdd(v4877, v2971);
          const v4879 = v4731[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4880 = v4879[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4881 = (stdlib.le(await ctc.getBalance(v2900), v4880) ? stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2900), v4880));
          const v4882 = stdlib.safeAdd(v4881, v4880);
          const v4884 = stdlib.Array_set(v4879, '0', v4882);
          const v4885 = stdlib.Array_set(v4731, stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0'), v4884);
          const v4890 = stdlib.safeSub(v4878, v4877);
          ;
          const v4891 = v4885[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4892 = v4891[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4896 = stdlib.safeSub(v4892, v4881);
          const v4898 = stdlib.Array_set(v4891, '0', v4896);
          const v4899 = stdlib.Array_set(v4885, stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0'), v4898);
          ;
          const cv2963 = v2963;
          const cv2964 = v3243;
          const cv2970 = v4899;
          const cv2971 = v4890;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5078 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5079 = v5078[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5082 = stdlib.Array_set(v5078, '0', v5079);
          const v5083 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5082);
          ;
          const v5254 = v5005[stdlib.checkedBigNumberify('./interface.rsh:216:10:spread', stdlib.UInt_max, '0')];
          const v5256 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v5256, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can update',
            who: 'Manager'
            });
          const v5258 = stdlib.gt(v5254, stdlib.checkedBigNumberify('./interface.rsh:218:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5258, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Manager'
            });
          const v5261 = null;
          await txn3.getOutput('updatePrice', 'v5261', ctc8, v5261);
          const v5275 = {
            closed: v3019,
            manager: v3018,
            price: v5254,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v5275;
          const cv2964 = v3243;
          const cv2970 = v5083;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5430 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5431 = v5430[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5434 = stdlib.Array_set(v5430, '0', v5431);
          const v5435 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5434);
          ;
          const v5631 = v5357[stdlib.checkedBigNumberify('./interface.rsh:231:10:spread', stdlib.UInt_max, '0')];
          const v5633 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v5633, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can update',
            who: 'Manager'
            });
          const v5635 = stdlib.gt(v5631, stdlib.checkedBigNumberify('./interface.rsh:233:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5635, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'tokenUnit must be greater than 0',
            who: 'Manager'
            });
          const v5638 = stdlib.safeMod(v3021, v5631);
          const v5639 = stdlib.eq(v5638, stdlib.checkedBigNumberify('./interface.rsh:234:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5639, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'tokenAmount must be divisible by tokenUnit',
            who: 'Manager'
            });
          const v5642 = null;
          await txn3.getOutput('updateTokenUnit', 'v5642', ctc8, v5642);
          const v5656 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v5631
            };
          const cv2963 = v5656;
          const cv2964 = v3243;
          const cv2970 = v5435;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5782 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5783 = v5782[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5786 = stdlib.Array_set(v5782, '0', v5783);
          const v5787 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5786);
          ;
          const v6012 = v5709[stdlib.checkedBigNumberify('./interface.rsh:193:10:spread', stdlib.UInt_max, '0')];
          const v6014 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v6014, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can withdraw',
            who: 'Manager'
            });
          const v6016 = stdlib.gt(v6012, stdlib.checkedBigNumberify('./interface.rsh:195:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v6016, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'withdraw must be greater than 0',
            who: 'Manager'
            });
          const v6019 = stdlib.safeMul(v6012, v3022);
          const v6021 = stdlib.le(v6019, v3021);
          stdlib.assert(v6021, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'withdraw must be less than or equal to token amount',
            who: 'Manager'
            });
          const v6024 = null;
          await txn3.getOutput('withdraw', 'v6024', ctc8, v6024);
          const v6034 = v5787[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6035 = v6034[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6039 = stdlib.safeSub(v6035, v6019);
          const v6041 = stdlib.Array_set(v6034, '0', v6039);
          const v6042 = stdlib.Array_set(v5787, stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0'), v6041);
          ;
          const v6053 = stdlib.safeSub(v3021, v6019);
          const v6057 = stdlib.safeSub(v3023, v6019);
          const v6058 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v6053,
            tokenSupply: v6057,
            tokenUnit: v3022
            };
          const cv2963 = v6058;
          const cv2964 = v3243;
          const cv2970 = v6042;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        }
      
      }
    const v6061 = v2963.manager;
    const v6062 = v2963.closed;
    const v6063 = v2963.token;
    const v6064 = v2963.tokenAmount;
    const v6065 = v2963.tokenUnit;
    const v6066 = v2963.tokenSupply;
    const v6067 = v2963.price;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v6071, time: v6070, didSend: v2607, from: v6069 } = txn3;
    ;
    return;
    
    
    }
  
  
  
  };
export async function Relay(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Relay expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Relay expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Data({
    buy0_281: ctc3,
    close0_281: ctc4,
    deposit0_281: ctc3,
    grant0_281: ctc5,
    touch0_281: ctc4,
    updatePrice0_281: ctc3,
    updateTokenUnit0_281: ctc3,
    withdraw0_281: ctc3
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v2880 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2881 = [v2880];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2897, v2898, v2899, v2900], secs: v2902, time: v2901, didSend: v46, from: v2896 } = txn1;
  const v2903 = v2881[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v2904 = stdlib.Array_set(v2903, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v2905 = stdlib.Array_set(v2881, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2904);
  ;
  ;
  const v2915 = stdlib.safeAdd(v2901, v2899);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc1, ctc1, ctc1],
    timeoutAt: ['time', v2915],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v2897, v2898, v2900, v2905, v2915],
      evt_cnt: 0,
      funcNum: 2,
      lct: v2901,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:125:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v6079, time: v6078, didSend: v2627, from: v6077 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2900
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc10, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v6079, time: v6078, didSend: v2627, from: v6077 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v2936, v2937, v2938], secs: v2940, time: v2939, didSend: v199, from: v2935 } = txn2;
    const v2941 = stdlib.gt(v2936, stdlib.checkedBigNumberify('./interface.rsh:116:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2941, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Relay'
      });
    const v2943 = stdlib.gt(v2938, stdlib.checkedBigNumberify('./interface.rsh:117:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2943, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Relay'
      });
    const v2945 = stdlib.gt(v2937, stdlib.checkedBigNumberify('./interface.rsh:118:25:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2945, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenUnit must be greater than 0',
      who: 'Relay'
      });
    const v2947 = stdlib.safeMod(v2936, v2937);
    const v2948 = stdlib.eq(v2947, stdlib.checkedBigNumberify('./interface.rsh:120:37:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2948, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenAmount must be divisible by tokenUnit',
      who: 'Relay'
      });
    ;
    const v2952 = v2905[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
    const v2953 = v2952[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
    const v2954 = stdlib.safeAdd(v2953, v2936);
    const v2956 = stdlib.Array_set(v2952, '0', v2954);
    const v2957 = stdlib.Array_set(v2905, stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0'), v2956);
    ;
    const v2961 = stdlib.safeSub(v2898, v2898);
    ;
    null;
    const v2962 = {
      closed: false,
      manager: v2935,
      price: v2938,
      token: v2900,
      tokenAmount: v2936,
      tokenSupply: v2936,
      tokenUnit: v2937
      };
    let v2963 = v2962;
    let v2964 = v2939;
    let v2970 = v2957;
    let v2971 = v2961;
    
    while (await (async () => {
      const v3010 = v2963.closed;
      const v3017 = v3010 ? false : true;
      
      return v3017;})()) {
      const v3018 = v2963.manager;
      const v3019 = v2963.closed;
      const v3020 = v2963.token;
      const v3021 = v2963.tokenAmount;
      const v3022 = v2963.tokenUnit;
      const v3023 = v2963.tokenSupply;
      const v3024 = v2963.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn3;
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          undefined /* setApiDetails */;
          const v3250 = v3245[stdlib.checkedBigNumberify('./interface.rsh:265:10:spread', stdlib.UInt_max, '0')];
          const v3252 = stdlib.safeMul(v3250, v3022);
          const v3254 = stdlib.le(v3252, v3021);
          stdlib.assert(v3254, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:265:24:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Relay'
            });
          const v3257 = stdlib.safeMul(v3250, v3024);
          const v3317 = stdlib.safeAdd(v2971, v3257);
          ;
          const v3318 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3319 = v3318[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3322 = stdlib.Array_set(v3318, '0', v3319);
          const v3323 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3322);
          ;
          const v3332 = null;
          await txn3.getOutput('buy', 'v3332', ctc7, v3332);
          const v3345 = stdlib.safeSub(v3317, v3257);
          ;
          const v3348 = v3323[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3349 = v3348[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3353 = stdlib.safeSub(v3349, v3252);
          const v3355 = stdlib.Array_set(v3348, '0', v3353);
          const v3356 = stdlib.Array_set(v3323, stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0'), v3355);
          ;
          const v3367 = stdlib.safeSub(v3021, v3252);
          const v3368 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3367,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v3368;
          const cv2964 = v3243;
          const cv2970 = v3356;
          const cv2971 = v3345;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v3670 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3671 = v3670[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3674 = stdlib.Array_set(v3670, '0', v3671);
          const v3675 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3674);
          ;
          const v3725 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v3725, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:287:13:application call to [unknown function] (defined at: ./interface.rsh:287:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can close',
            who: 'Relay'
            });
          const v3727 = null;
          await txn3.getOutput('close', 'v3727', ctc7, v3727);
          const v3735 = v3675[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3736 = v3735[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3740 = stdlib.safeSub(v3736, v3021);
          const v3742 = stdlib.Array_set(v3735, '0', v3740);
          const v3743 = stdlib.Array_set(v3675, stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0'), v3742);
          ;
          const v3751 = {
            closed: true,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenUnit: v3022
            };
          const cv2963 = v3751;
          const cv2964 = v3243;
          const cv2970 = v3743;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          undefined /* setApiDetails */;
          const v3974 = v3949[stdlib.checkedBigNumberify('./interface.rsh:174:10:spread', stdlib.UInt_max, '0')];
          const v3976 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v3976, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can deposit',
            who: 'Relay'
            });
          const v3978 = stdlib.gt(v3974, stdlib.checkedBigNumberify('./interface.rsh:176:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3978, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'deposit must be greater than 0',
            who: 'Relay'
            });
          const v3981 = stdlib.safeMul(v3974, v3022);
          ;
          const v4022 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4023 = v4022[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4024 = stdlib.safeAdd(v4023, v3981);
          const v4026 = stdlib.Array_set(v4022, '0', v4024);
          const v4027 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4026);
          ;
          const v4114 = null;
          await txn3.getOutput('deposit', 'v4114', ctc7, v4114);
          const v4131 = stdlib.safeAdd(v3021, v3981);
          const v4135 = stdlib.safeAdd(v3023, v3981);
          const v4136 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v4131,
            tokenSupply: v4135,
            tokenUnit: v3022
            };
          const cv2963 = v4136;
          const cv2964 = v3243;
          const cv2970 = v4027;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v4374 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4375 = v4374[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4378 = stdlib.Array_set(v4374, '0', v4375);
          const v4379 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4378);
          ;
          const v4492 = v4301[stdlib.checkedBigNumberify('./interface.rsh:249:10:spread', stdlib.UInt_max, '0')];
          const v4494 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v4494, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:250:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:252:13:application call to [unknown function] (defined at: ./interface.rsh:252:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Relay'
            });
          const v4497 = null;
          await txn3.getOutput('grant', 'v4497', ctc7, v4497);
          const v4511 = {
            closed: v3019,
            manager: v4492,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v4511;
          const cv2964 = v3243;
          const cv2970 = v4379;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v4726 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4727 = v4726[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4730 = stdlib.Array_set(v4726, '0', v4727);
          const v4731 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4730);
          ;
          const v4868 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v4868, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:163:13:application call to [unknown function] (defined at: ./interface.rsh:163:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can touch',
            who: 'Relay'
            });
          const v4870 = null;
          await txn3.getOutput('touch', 'v4870', ctc7, v4870);
          const v4877 = (stdlib.le(await ctc.getBalance(), v2971) ? stdlib.checkedBigNumberify('./interface.rsh:165:38:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2971));
          const v4878 = stdlib.safeAdd(v4877, v2971);
          const v4879 = v4731[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4880 = v4879[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4881 = (stdlib.le(await ctc.getBalance(v2900), v4880) ? stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2900), v4880));
          const v4882 = stdlib.safeAdd(v4881, v4880);
          const v4884 = stdlib.Array_set(v4879, '0', v4882);
          const v4885 = stdlib.Array_set(v4731, stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0'), v4884);
          const v4890 = stdlib.safeSub(v4878, v4877);
          ;
          const v4891 = v4885[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4892 = v4891[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4896 = stdlib.safeSub(v4892, v4881);
          const v4898 = stdlib.Array_set(v4891, '0', v4896);
          const v4899 = stdlib.Array_set(v4885, stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0'), v4898);
          ;
          const cv2963 = v2963;
          const cv2964 = v3243;
          const cv2970 = v4899;
          const cv2971 = v4890;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5078 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5079 = v5078[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5082 = stdlib.Array_set(v5078, '0', v5079);
          const v5083 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5082);
          ;
          const v5254 = v5005[stdlib.checkedBigNumberify('./interface.rsh:216:10:spread', stdlib.UInt_max, '0')];
          const v5256 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v5256, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can update',
            who: 'Relay'
            });
          const v5258 = stdlib.gt(v5254, stdlib.checkedBigNumberify('./interface.rsh:218:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5258, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Relay'
            });
          const v5261 = null;
          await txn3.getOutput('updatePrice', 'v5261', ctc7, v5261);
          const v5275 = {
            closed: v3019,
            manager: v3018,
            price: v5254,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v5275;
          const cv2964 = v3243;
          const cv2970 = v5083;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5430 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5431 = v5430[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5434 = stdlib.Array_set(v5430, '0', v5431);
          const v5435 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5434);
          ;
          const v5631 = v5357[stdlib.checkedBigNumberify('./interface.rsh:231:10:spread', stdlib.UInt_max, '0')];
          const v5633 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v5633, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can update',
            who: 'Relay'
            });
          const v5635 = stdlib.gt(v5631, stdlib.checkedBigNumberify('./interface.rsh:233:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5635, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'tokenUnit must be greater than 0',
            who: 'Relay'
            });
          const v5638 = stdlib.safeMod(v3021, v5631);
          const v5639 = stdlib.eq(v5638, stdlib.checkedBigNumberify('./interface.rsh:234:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5639, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'tokenAmount must be divisible by tokenUnit',
            who: 'Relay'
            });
          const v5642 = null;
          await txn3.getOutput('updateTokenUnit', 'v5642', ctc7, v5642);
          const v5656 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v5631
            };
          const cv2963 = v5656;
          const cv2964 = v3243;
          const cv2970 = v5435;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5782 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5783 = v5782[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5786 = stdlib.Array_set(v5782, '0', v5783);
          const v5787 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5786);
          ;
          const v6012 = v5709[stdlib.checkedBigNumberify('./interface.rsh:193:10:spread', stdlib.UInt_max, '0')];
          const v6014 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v6014, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can withdraw',
            who: 'Relay'
            });
          const v6016 = stdlib.gt(v6012, stdlib.checkedBigNumberify('./interface.rsh:195:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v6016, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'withdraw must be greater than 0',
            who: 'Relay'
            });
          const v6019 = stdlib.safeMul(v6012, v3022);
          const v6021 = stdlib.le(v6019, v3021);
          stdlib.assert(v6021, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'withdraw must be less than or equal to token amount',
            who: 'Relay'
            });
          const v6024 = null;
          await txn3.getOutput('withdraw', 'v6024', ctc7, v6024);
          const v6034 = v5787[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6035 = v6034[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6039 = stdlib.safeSub(v6035, v6019);
          const v6041 = stdlib.Array_set(v6034, '0', v6039);
          const v6042 = stdlib.Array_set(v5787, stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0'), v6041);
          ;
          const v6053 = stdlib.safeSub(v3021, v6019);
          const v6057 = stdlib.safeSub(v3023, v6019);
          const v6058 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v6053,
            tokenSupply: v6057,
            tokenUnit: v3022
            };
          const cv2963 = v6058;
          const cv2964 = v3243;
          const cv2970 = v6042;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        }
      
      }
    const v6061 = v2963.manager;
    const v6062 = v2963.closed;
    const v6063 = v2963.token;
    const v6064 = v2963.tokenAmount;
    const v6065 = v2963.tokenUnit;
    const v6066 = v2963.tokenSupply;
    const v6067 = v2963.price;
    const txn3 = await (ctc.sendrecv({
      args: [v2900, v6061, v6062, v6063, v6064, v6065, v6066, v6067],
      evt_cnt: 0,
      funcNum: 4,
      lct: v2964,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:303:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v6071, time: v6070, didSend: v2607, from: v6069 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2900
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v6071, time: v6070, didSend: v2607, from: v6069 } = txn3;
    ;
    return;
    
    
    }
  
  
  
  };
export async function Verifier(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Verifier expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Verifier expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Data({
    buy0_281: ctc3,
    close0_281: ctc4,
    deposit0_281: ctc3,
    grant0_281: ctc5,
    touch0_281: ctc4,
    updatePrice0_281: ctc3,
    updateTokenUnit0_281: ctc3,
    withdraw0_281: ctc3
    });
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc1, ctc8]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v2880 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v2881 = [v2880];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v2897, v2898, v2899, v2900], secs: v2902, time: v2901, didSend: v46, from: v2896 } = txn1;
  const v2903 = v2881[stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0')];
  const v2904 = stdlib.Array_set(v2903, '0', stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'));
  const v2905 = stdlib.Array_set(v2881, stdlib.checkedBigNumberify('./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:33:15:dot', stdlib.UInt_max, '0'), v2904);
  ;
  ;
  const v2915 = stdlib.safeAdd(v2901, v2899);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc1, ctc1, ctc1],
    timeoutAt: ['time', v2915],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v2897, v2898, v2900, v2905, v2915],
      evt_cnt: 0,
      funcNum: 2,
      lct: v2901,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./interface.rsh:125:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v6079, time: v6078, didSend: v2627, from: v6077 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v2900
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc0, ctc1, ctc2, ctc10, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v6079, time: v6078, didSend: v2627, from: v6077 } = txn3;
    ;
    return;
    
    }
  else {
    const {data: [v2936, v2937, v2938], secs: v2940, time: v2939, didSend: v199, from: v2935 } = txn2;
    const v2941 = stdlib.gt(v2936, stdlib.checkedBigNumberify('./interface.rsh:116:27:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2941, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenAmount must be greater than 0',
      who: 'Verifier'
      });
    const v2943 = stdlib.gt(v2938, stdlib.checkedBigNumberify('./interface.rsh:117:21:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2943, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'price must be greater than 0',
      who: 'Verifier'
      });
    const v2945 = stdlib.gt(v2937, stdlib.checkedBigNumberify('./interface.rsh:118:25:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2945, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenUnit must be greater than 0',
      who: 'Verifier'
      });
    const v2947 = stdlib.safeMod(v2936, v2937);
    const v2948 = stdlib.eq(v2947, stdlib.checkedBigNumberify('./interface.rsh:120:37:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v2948, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./interface.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
      msg: 'tokenAmount must be divisible by tokenUnit',
      who: 'Verifier'
      });
    ;
    const v2952 = v2905[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
    const v2953 = v2952[stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0')];
    const v2954 = stdlib.safeAdd(v2953, v2936);
    const v2956 = stdlib.Array_set(v2952, '0', v2954);
    const v2957 = stdlib.Array_set(v2905, stdlib.checkedBigNumberify('./interface.rsh:113:11:dot', stdlib.UInt_max, '0'), v2956);
    ;
    const v2961 = stdlib.safeSub(v2898, v2898);
    ;
    null;
    const v2962 = {
      closed: false,
      manager: v2935,
      price: v2938,
      token: v2900,
      tokenAmount: v2936,
      tokenSupply: v2936,
      tokenUnit: v2937
      };
    let v2963 = v2962;
    let v2964 = v2939;
    let v2970 = v2957;
    let v2971 = v2961;
    
    while (await (async () => {
      const v3010 = v2963.closed;
      const v3017 = v3010 ? false : true;
      
      return v3017;})()) {
      const v3018 = v2963.manager;
      const v3019 = v2963.closed;
      const v3020 = v2963.token;
      const v3021 = v2963.tokenAmount;
      const v3022 = v2963.tokenUnit;
      const v3023 = v2963.tokenSupply;
      const v3024 = v2963.price;
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc6],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn3;
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          undefined /* setApiDetails */;
          const v3250 = v3245[stdlib.checkedBigNumberify('./interface.rsh:265:10:spread', stdlib.UInt_max, '0')];
          const v3252 = stdlib.safeMul(v3250, v3022);
          const v3254 = stdlib.le(v3252, v3021);
          stdlib.assert(v3254, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:265:24:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'not enough tokens',
            who: 'Verifier'
            });
          const v3257 = stdlib.safeMul(v3250, v3024);
          const v3317 = stdlib.safeAdd(v2971, v3257);
          ;
          const v3318 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3319 = v3318[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3322 = stdlib.Array_set(v3318, '0', v3319);
          const v3323 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3322);
          ;
          const v3332 = null;
          await txn3.getOutput('buy', 'v3332', ctc7, v3332);
          const v3345 = stdlib.safeSub(v3317, v3257);
          ;
          const v3348 = v3323[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3349 = v3348[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3353 = stdlib.safeSub(v3349, v3252);
          const v3355 = stdlib.Array_set(v3348, '0', v3353);
          const v3356 = stdlib.Array_set(v3323, stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0'), v3355);
          ;
          const v3367 = stdlib.safeSub(v3021, v3252);
          const v3368 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3367,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v3368;
          const cv2964 = v3243;
          const cv2970 = v3356;
          const cv2971 = v3345;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v3670 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3671 = v3670[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3674 = stdlib.Array_set(v3670, '0', v3671);
          const v3675 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3674);
          ;
          const v3725 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v3725, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:287:13:application call to [unknown function] (defined at: ./interface.rsh:287:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can close',
            who: 'Verifier'
            });
          const v3727 = null;
          await txn3.getOutput('close', 'v3727', ctc7, v3727);
          const v3735 = v3675[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3736 = v3735[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3740 = stdlib.safeSub(v3736, v3021);
          const v3742 = stdlib.Array_set(v3735, '0', v3740);
          const v3743 = stdlib.Array_set(v3675, stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0'), v3742);
          ;
          const v3751 = {
            closed: true,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenUnit: v3022
            };
          const cv2963 = v3751;
          const cv2964 = v3243;
          const cv2970 = v3743;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          undefined /* setApiDetails */;
          const v3974 = v3949[stdlib.checkedBigNumberify('./interface.rsh:174:10:spread', stdlib.UInt_max, '0')];
          const v3976 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v3976, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can deposit',
            who: 'Verifier'
            });
          const v3978 = stdlib.gt(v3974, stdlib.checkedBigNumberify('./interface.rsh:176:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v3978, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'deposit must be greater than 0',
            who: 'Verifier'
            });
          const v3981 = stdlib.safeMul(v3974, v3022);
          ;
          const v4022 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4023 = v4022[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4024 = stdlib.safeAdd(v4023, v3981);
          const v4026 = stdlib.Array_set(v4022, '0', v4024);
          const v4027 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4026);
          ;
          const v4114 = null;
          await txn3.getOutput('deposit', 'v4114', ctc7, v4114);
          const v4131 = stdlib.safeAdd(v3021, v3981);
          const v4135 = stdlib.safeAdd(v3023, v3981);
          const v4136 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v4131,
            tokenSupply: v4135,
            tokenUnit: v3022
            };
          const cv2963 = v4136;
          const cv2964 = v3243;
          const cv2970 = v4027;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v4374 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4375 = v4374[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4378 = stdlib.Array_set(v4374, '0', v4375);
          const v4379 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4378);
          ;
          const v4492 = v4301[stdlib.checkedBigNumberify('./interface.rsh:249:10:spread', stdlib.UInt_max, '0')];
          const v4494 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v4494, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:250:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:252:13:application call to [unknown function] (defined at: ./interface.rsh:252:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can grant',
            who: 'Verifier'
            });
          const v4497 = null;
          await txn3.getOutput('grant', 'v4497', ctc7, v4497);
          const v4511 = {
            closed: v3019,
            manager: v4492,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v4511;
          const cv2964 = v3243;
          const cv2970 = v4379;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v4726 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4727 = v4726[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4730 = stdlib.Array_set(v4726, '0', v4727);
          const v4731 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4730);
          ;
          const v4868 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v4868, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:163:13:application call to [unknown function] (defined at: ./interface.rsh:163:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can touch',
            who: 'Verifier'
            });
          const v4870 = null;
          await txn3.getOutput('touch', 'v4870', ctc7, v4870);
          const v4877 = (stdlib.le(await ctc.getBalance(), v2971) ? stdlib.checkedBigNumberify('./interface.rsh:165:38:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2971));
          const v4878 = stdlib.safeAdd(v4877, v2971);
          const v4879 = v4731[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4880 = v4879[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4881 = (stdlib.le(await ctc.getBalance(v2900), v4880) ? stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2900), v4880));
          const v4882 = stdlib.safeAdd(v4881, v4880);
          const v4884 = stdlib.Array_set(v4879, '0', v4882);
          const v4885 = stdlib.Array_set(v4731, stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0'), v4884);
          const v4890 = stdlib.safeSub(v4878, v4877);
          ;
          const v4891 = v4885[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4892 = v4891[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4896 = stdlib.safeSub(v4892, v4881);
          const v4898 = stdlib.Array_set(v4891, '0', v4896);
          const v4899 = stdlib.Array_set(v4885, stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0'), v4898);
          ;
          const cv2963 = v2963;
          const cv2964 = v3243;
          const cv2970 = v4899;
          const cv2971 = v4890;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5078 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5079 = v5078[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5082 = stdlib.Array_set(v5078, '0', v5079);
          const v5083 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5082);
          ;
          const v5254 = v5005[stdlib.checkedBigNumberify('./interface.rsh:216:10:spread', stdlib.UInt_max, '0')];
          const v5256 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v5256, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can update',
            who: 'Verifier'
            });
          const v5258 = stdlib.gt(v5254, stdlib.checkedBigNumberify('./interface.rsh:218:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5258, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'price must be greater than 0',
            who: 'Verifier'
            });
          const v5261 = null;
          await txn3.getOutput('updatePrice', 'v5261', ctc7, v5261);
          const v5275 = {
            closed: v3019,
            manager: v3018,
            price: v5254,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const cv2963 = v5275;
          const cv2964 = v3243;
          const cv2970 = v5083;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5430 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5431 = v5430[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5434 = stdlib.Array_set(v5430, '0', v5431);
          const v5435 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5434);
          ;
          const v5631 = v5357[stdlib.checkedBigNumberify('./interface.rsh:231:10:spread', stdlib.UInt_max, '0')];
          const v5633 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v5633, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can update',
            who: 'Verifier'
            });
          const v5635 = stdlib.gt(v5631, stdlib.checkedBigNumberify('./interface.rsh:233:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5635, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'tokenUnit must be greater than 0',
            who: 'Verifier'
            });
          const v5638 = stdlib.safeMod(v3021, v5631);
          const v5639 = stdlib.eq(v5638, stdlib.checkedBigNumberify('./interface.rsh:234:37:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v5639, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'tokenAmount must be divisible by tokenUnit',
            who: 'Verifier'
            });
          const v5642 = null;
          await txn3.getOutput('updateTokenUnit', 'v5642', ctc7, v5642);
          const v5656 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v5631
            };
          const cv2963 = v5656;
          const cv2964 = v3243;
          const cv2970 = v5435;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          undefined /* setApiDetails */;
          ;
          const v5782 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5783 = v5782[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5786 = stdlib.Array_set(v5782, '0', v5783);
          const v5787 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5786);
          ;
          const v6012 = v5709[stdlib.checkedBigNumberify('./interface.rsh:193:10:spread', stdlib.UInt_max, '0')];
          const v6014 = stdlib.addressEq(v3241, v3018);
          stdlib.assert(v6014, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'only manager can withdraw',
            who: 'Verifier'
            });
          const v6016 = stdlib.gt(v6012, stdlib.checkedBigNumberify('./interface.rsh:195:19:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v6016, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'withdraw must be greater than 0',
            who: 'Verifier'
            });
          const v6019 = stdlib.safeMul(v6012, v3022);
          const v6021 = stdlib.le(v6019, v3021);
          stdlib.assert(v6021, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./interface.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
            msg: 'withdraw must be less than or equal to token amount',
            who: 'Verifier'
            });
          const v6024 = null;
          await txn3.getOutput('withdraw', 'v6024', ctc7, v6024);
          const v6034 = v5787[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6035 = v6034[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6039 = stdlib.safeSub(v6035, v6019);
          const v6041 = stdlib.Array_set(v6034, '0', v6039);
          const v6042 = stdlib.Array_set(v5787, stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0'), v6041);
          ;
          const v6053 = stdlib.safeSub(v3021, v6019);
          const v6057 = stdlib.safeSub(v3023, v6019);
          const v6058 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v6053,
            tokenSupply: v6057,
            tokenUnit: v3022
            };
          const cv2963 = v6058;
          const cv2964 = v3243;
          const cv2970 = v6042;
          const cv2971 = v2971;
          
          v2963 = cv2963;
          v2964 = cv2964;
          v2970 = cv2970;
          v2971 = cv2971;
          
          continue;
          break;
          }
        }
      
      }
    const v6061 = v2963.manager;
    const v6062 = v2963.closed;
    const v6063 = v2963.token;
    const v6064 = v2963.tokenAmount;
    const v6065 = v2963.tokenUnit;
    const v6066 = v2963.tokenSupply;
    const v6067 = v2963.price;
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v6071, time: v6070, didSend: v2607, from: v6069 } = txn3;
    ;
    return;
    
    
    }
  
  
  
  };
export async function _buy6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _buy6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _buy6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    closed: ctc1,
    manager: ctc2,
    price: ctc3,
    token: ctc0,
    tokenAmount: ctc3,
    tokenSupply: ctc3,
    tokenUnit: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Data({
    buy0_281: ctc7,
    close0_281: ctc8,
    deposit0_281: ctc7,
    grant0_281: ctc9,
    touch0_281: ctc8,
    updatePrice0_281: ctc7,
    updateTokenUnit0_281: ctc7,
    withdraw0_281: ctc7
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3]);
  const v3131 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:265:24:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to "runbuy0_281" (defined at: ./interface.rsh:265:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'in',
    who: 'buy'
    });
  const v3132 = v3131[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3135 = stdlib.safeMul(v3132, v3022);
  const v3137 = stdlib.le(v3135, v3021);
  stdlib.assert(v3137, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:265:24:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to "runbuy0_281" (defined at: ./interface.rsh:265:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'not enough tokens',
    who: 'buy'
    });
  const v3144 = ['buy0_281', v3131];
  
  const v3165 = stdlib.safeMul(v3132, v3024);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024, v3144],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [v3165, [[stdlib.checkedBigNumberify('./interface.rsh:268:26:decimal', stdlib.UInt_max, '0'), v2900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
      
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          sim_r.txns.push({
            kind: 'api',
            who: "buy"
            });
          const v3250 = v3245[stdlib.checkedBigNumberify('./interface.rsh:265:10:spread', stdlib.UInt_max, '0')];
          const v3252 = stdlib.safeMul(v3250, v3022);
          const v3257 = stdlib.safeMul(v3250, v3024);
          const v3317 = stdlib.safeAdd(v2971, v3257);
          sim_r.txns.push({
            amt: v3257,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3318 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3319 = v3318[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3322 = stdlib.Array_set(v3318, '0', v3319);
          const v3323 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3322);
          ;
          const v3332 = null;
          const v3333 = await txn1.getOutput('buy', 'v3332', ctc11, v3332);
          
          const v3345 = stdlib.safeSub(v3317, v3257);
          sim_r.txns.push({
            kind: 'from',
            to: v3018,
            tok: undefined /* Nothing */
            });
          const v3348 = v3323[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3349 = v3348[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
          const v3353 = stdlib.safeSub(v3349, v3252);
          const v3355 = stdlib.Array_set(v3348, '0', v3353);
          const v3356 = stdlib.Array_set(v3323, stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0'), v3355);
          sim_r.txns.push({
            kind: 'from',
            to: v3241,
            tok: v2900
            });
          const v3367 = stdlib.safeSub(v3021, v3252);
          const v3368 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3367,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const v11599 = v3368;
          const v11601 = v3356;
          const v11602 = v3345;
          const v11603 = v3368.closed;
          if (v11603) {
            const v11612 = v3368.manager;
            const v11614 = v3368.token;
            const v11615 = v3368.tokenAmount;
            const v11616 = v3368.tokenUnit;
            const v11617 = v3368.tokenSupply;
            const v11618 = v3368.price;
            sim_r.isHalt = false;
            }
          else {
            const v11605 = v3368.manager;
            const v11607 = v3368.token;
            const v11608 = v3368.tokenAmount;
            const v11609 = v3368.tokenUnit;
            const v11610 = v3368.tokenSupply;
            const v11611 = v3368.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
  switch (v3242[0]) {
    case 'buy0_281': {
      const v3245 = v3242[1];
      undefined /* setApiDetails */;
      const v3250 = v3245[stdlib.checkedBigNumberify('./interface.rsh:265:10:spread', stdlib.UInt_max, '0')];
      const v3252 = stdlib.safeMul(v3250, v3022);
      const v3254 = stdlib.le(v3252, v3021);
      stdlib.assert(v3254, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:266:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:265:24:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:265:24:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'not enough tokens',
        who: 'buy'
        });
      const v3257 = stdlib.safeMul(v3250, v3024);
      const v3317 = stdlib.safeAdd(v2971, v3257);
      ;
      const v3318 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v3319 = v3318[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v3322 = stdlib.Array_set(v3318, '0', v3319);
      const v3323 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3322);
      ;
      const v3332 = null;
      const v3333 = await txn1.getOutput('buy', 'v3332', ctc11, v3332);
      if (v2134) {
        stdlib.protect(ctc11, await interact.out(v3245, v3333), {
          at: './interface.rsh:265:11:application',
          fs: ['at ./interface.rsh:265:11:application call to [unknown function] (defined at: ./interface.rsh:265:11:function exp)', 'at ./interface.rsh:270:12:application call to "k" (defined at: ./interface.rsh:269:13:function exp)', 'at ./interface.rsh:269:13:application call to [unknown function] (defined at: ./interface.rsh:269:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
          msg: 'out',
          who: 'buy'
          });
        }
      else {
        }
      
      const v3345 = stdlib.safeSub(v3317, v3257);
      ;
      const v3348 = v3323[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
      const v3349 = v3348[stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0')];
      const v3353 = stdlib.safeSub(v3349, v3252);
      const v3355 = stdlib.Array_set(v3348, '0', v3353);
      const v3356 = stdlib.Array_set(v3323, stdlib.checkedBigNumberify('./interface.rsh:272:48:application', stdlib.UInt_max, '0'), v3355);
      ;
      const v3367 = stdlib.safeSub(v3021, v3252);
      const v3368 = {
        closed: v3019,
        manager: v3018,
        price: v3024,
        token: v3020,
        tokenAmount: v3367,
        tokenSupply: v3023,
        tokenUnit: v3022
        };
      const v11599 = v3368;
      const v11601 = v3356;
      const v11602 = v3345;
      const v11603 = v3368.closed;
      if (v11603) {
        const v11612 = v3368.manager;
        const v11614 = v3368.token;
        const v11615 = v3368.tokenAmount;
        const v11616 = v3368.tokenUnit;
        const v11617 = v3368.tokenSupply;
        const v11618 = v3368.price;
        return;
        }
      else {
        const v11605 = v3368.manager;
        const v11607 = v3368.token;
        const v11608 = v3368.tokenAmount;
        const v11609 = v3368.tokenUnit;
        const v11610 = v3368.tokenSupply;
        const v11611 = v3368.price;
        return;
        }
      break;
      }
    case 'close0_281': {
      const v3597 = v3242[1];
      return;
      break;
      }
    case 'deposit0_281': {
      const v3949 = v3242[1];
      return;
      break;
      }
    case 'grant0_281': {
      const v4301 = v3242[1];
      return;
      break;
      }
    case 'touch0_281': {
      const v4653 = v3242[1];
      return;
      break;
      }
    case 'updatePrice0_281': {
      const v5005 = v3242[1];
      return;
      break;
      }
    case 'updateTokenUnit0_281': {
      const v5357 = v3242[1];
      return;
      break;
      }
    case 'withdraw0_281': {
      const v5709 = v3242[1];
      return;
      break;
      }
    }
  
  
  };
export async function _close6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _close6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _close6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    closed: ctc1,
    manager: ctc2,
    price: ctc3,
    token: ctc0,
    tokenAmount: ctc3,
    tokenSupply: ctc3,
    tokenUnit: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Data({
    buy0_281: ctc8,
    close0_281: ctc7,
    deposit0_281: ctc8,
    grant0_281: ctc9,
    touch0_281: ctc7,
    updatePrice0_281: ctc8,
    updateTokenUnit0_281: ctc8,
    withdraw0_281: ctc8
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3]);
  const v3146 = ctc.selfAddress();
  const v3148 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:284:23:application call to [unknown function] (defined at: ./interface.rsh:284:23:function exp)', 'at ./interface.rsh:142:29:application call to "runclose0_281" (defined at: ./interface.rsh:284:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'in',
    who: 'close'
    });
  const v3150 = stdlib.addressEq(v3146, v3018);
  stdlib.assert(v3150, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:284:23:application call to [unknown function] (defined at: ./interface.rsh:284:23:function exp)', 'at ./interface.rsh:142:29:application call to "runclose0_281" (defined at: ./interface.rsh:284:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'only manager can close',
    who: 'close'
    });
  const v3155 = ['close0_281', v3148];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024, v3155],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:284:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:158:14:decimal', stdlib.UInt_max, '0'), v2900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
      
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          sim_r.txns.push({
            kind: 'api',
            who: "close"
            });
          ;
          const v3670 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3671 = v3670[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v3674 = stdlib.Array_set(v3670, '0', v3671);
          const v3675 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3674);
          ;
          const v3727 = null;
          const v3728 = await txn1.getOutput('close', 'v3727', ctc11, v3727);
          
          const v3735 = v3675[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3736 = v3735[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
          const v3740 = stdlib.safeSub(v3736, v3021);
          const v3742 = stdlib.Array_set(v3735, '0', v3740);
          const v3743 = stdlib.Array_set(v3675, stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0'), v3742);
          sim_r.txns.push({
            kind: 'from',
            to: v3018,
            tok: v2900
            });
          const v3751 = {
            closed: true,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            tokenUnit: v3022
            };
          const v11815 = v3751;
          const v11817 = v3743;
          const v11818 = v2971;
          const v11819 = v3751.closed;
          if (v11819) {
            const v11828 = v3751.manager;
            const v11830 = v3751.token;
            const v11831 = v3751.tokenAmount;
            const v11832 = v3751.tokenUnit;
            const v11833 = v3751.tokenSupply;
            const v11834 = v3751.price;
            sim_r.isHalt = false;
            }
          else {
            const v11821 = v3751.manager;
            const v11823 = v3751.token;
            const v11824 = v3751.tokenAmount;
            const v11825 = v3751.tokenUnit;
            const v11826 = v3751.tokenSupply;
            const v11827 = v3751.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
  switch (v3242[0]) {
    case 'buy0_281': {
      const v3245 = v3242[1];
      return;
      break;
      }
    case 'close0_281': {
      const v3597 = v3242[1];
      undefined /* setApiDetails */;
      ;
      const v3670 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v3671 = v3670[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v3674 = stdlib.Array_set(v3670, '0', v3671);
      const v3675 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v3674);
      ;
      const v3725 = stdlib.addressEq(v3241, v3018);
      stdlib.assert(v3725, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:285:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:287:13:application call to [unknown function] (defined at: ./interface.rsh:287:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'only manager can close',
        who: 'close'
        });
      const v3727 = null;
      const v3728 = await txn1.getOutput('close', 'v3727', ctc11, v3727);
      if (v2134) {
        stdlib.protect(ctc11, await interact.out(v3597, v3728), {
          at: './interface.rsh:284:11:application',
          fs: ['at ./interface.rsh:284:11:application call to [unknown function] (defined at: ./interface.rsh:284:11:function exp)', 'at ./interface.rsh:288:12:application call to "k" (defined at: ./interface.rsh:287:13:function exp)', 'at ./interface.rsh:287:13:application call to [unknown function] (defined at: ./interface.rsh:287:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
          msg: 'out',
          who: 'close'
          });
        }
      else {
        }
      
      const v3735 = v3675[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
      const v3736 = v3735[stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0')];
      const v3740 = stdlib.safeSub(v3736, v3021);
      const v3742 = stdlib.Array_set(v3735, '0', v3740);
      const v3743 = stdlib.Array_set(v3675, stdlib.checkedBigNumberify('./interface.rsh:289:48:application', stdlib.UInt_max, '0'), v3742);
      ;
      const v3751 = {
        closed: true,
        manager: v3018,
        price: v3024,
        token: v3020,
        tokenAmount: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        tokenSupply: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        tokenUnit: v3022
        };
      const v11815 = v3751;
      const v11817 = v3743;
      const v11818 = v2971;
      const v11819 = v3751.closed;
      if (v11819) {
        const v11828 = v3751.manager;
        const v11830 = v3751.token;
        const v11831 = v3751.tokenAmount;
        const v11832 = v3751.tokenUnit;
        const v11833 = v3751.tokenSupply;
        const v11834 = v3751.price;
        return;
        }
      else {
        const v11821 = v3751.manager;
        const v11823 = v3751.token;
        const v11824 = v3751.tokenAmount;
        const v11825 = v3751.tokenUnit;
        const v11826 = v3751.tokenSupply;
        const v11827 = v3751.price;
        return;
        }
      break;
      }
    case 'deposit0_281': {
      const v3949 = v3242[1];
      return;
      break;
      }
    case 'grant0_281': {
      const v4301 = v3242[1];
      return;
      break;
      }
    case 'touch0_281': {
      const v4653 = v3242[1];
      return;
      break;
      }
    case 'updatePrice0_281': {
      const v5005 = v3242[1];
      return;
      break;
      }
    case 'updateTokenUnit0_281': {
      const v5357 = v3242[1];
      return;
      break;
      }
    case 'withdraw0_281': {
      const v5709 = v3242[1];
      return;
      break;
      }
    }
  
  
  };
export async function _deposit6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _deposit6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _deposit6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    closed: ctc1,
    manager: ctc2,
    price: ctc3,
    token: ctc0,
    tokenAmount: ctc3,
    tokenSupply: ctc3,
    tokenUnit: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Data({
    buy0_281: ctc7,
    close0_281: ctc8,
    deposit0_281: ctc7,
    grant0_281: ctc9,
    touch0_281: ctc8,
    updatePrice0_281: ctc7,
    updateTokenUnit0_281: ctc7,
    withdraw0_281: ctc7
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3]);
  const v3037 = ctc.selfAddress();
  const v3039 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to "rundeposit0_281" (defined at: ./interface.rsh:174:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'in',
    who: 'deposit'
    });
  const v3040 = v3039[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3043 = stdlib.addressEq(v3037, v3018);
  stdlib.assert(v3043, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to "rundeposit0_281" (defined at: ./interface.rsh:174:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'only manager can deposit',
    who: 'deposit'
    });
  const v3045 = stdlib.gt(v3040, stdlib.checkedBigNumberify('./interface.rsh:176:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3045, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to "rundeposit0_281" (defined at: ./interface.rsh:174:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'deposit must be greater than 0',
    who: 'deposit'
    });
  const v3052 = ['deposit0_281', v3039];
  
  const v3191 = stdlib.safeMul(v3040, v3022);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024, v3052],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:178:10:decimal', stdlib.UInt_max, '0'), [[v3191, v2900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
      
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          sim_r.txns.push({
            kind: 'api',
            who: "deposit"
            });
          const v3974 = v3949[stdlib.checkedBigNumberify('./interface.rsh:174:10:spread', stdlib.UInt_max, '0')];
          const v3981 = stdlib.safeMul(v3974, v3022);
          ;
          const v4022 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4023 = v4022[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4024 = stdlib.safeAdd(v4023, v3981);
          const v4026 = stdlib.Array_set(v4022, '0', v4024);
          const v4027 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4026);
          sim_r.txns.push({
            amt: v3981,
            kind: 'to',
            tok: v2900
            });
          const v4114 = null;
          const v4115 = await txn1.getOutput('deposit', 'v4114', ctc11, v4114);
          
          const v4131 = stdlib.safeAdd(v3021, v3981);
          const v4135 = stdlib.safeAdd(v3023, v3981);
          const v4136 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v4131,
            tokenSupply: v4135,
            tokenUnit: v3022
            };
          const v12031 = v4136;
          const v12033 = v4027;
          const v12034 = v2971;
          const v12035 = v4136.closed;
          if (v12035) {
            const v12044 = v4136.manager;
            const v12046 = v4136.token;
            const v12047 = v4136.tokenAmount;
            const v12048 = v4136.tokenUnit;
            const v12049 = v4136.tokenSupply;
            const v12050 = v4136.price;
            sim_r.isHalt = false;
            }
          else {
            const v12037 = v4136.manager;
            const v12039 = v4136.token;
            const v12040 = v4136.tokenAmount;
            const v12041 = v4136.tokenUnit;
            const v12042 = v4136.tokenSupply;
            const v12043 = v4136.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
  switch (v3242[0]) {
    case 'buy0_281': {
      const v3245 = v3242[1];
      return;
      break;
      }
    case 'close0_281': {
      const v3597 = v3242[1];
      return;
      break;
      }
    case 'deposit0_281': {
      const v3949 = v3242[1];
      undefined /* setApiDetails */;
      const v3974 = v3949[stdlib.checkedBigNumberify('./interface.rsh:174:10:spread', stdlib.UInt_max, '0')];
      const v3976 = stdlib.addressEq(v3241, v3018);
      stdlib.assert(v3976, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:175:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'only manager can deposit',
        who: 'deposit'
        });
      const v3978 = stdlib.gt(v3974, stdlib.checkedBigNumberify('./interface.rsh:176:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3978, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:176:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:174:28:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:174:28:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./interface.rsh:158:14:application call to [unknown function] (defined at: ./interface.rsh:158:14:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'deposit must be greater than 0',
        who: 'deposit'
        });
      const v3981 = stdlib.safeMul(v3974, v3022);
      ;
      const v4022 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v4023 = v4022[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v4024 = stdlib.safeAdd(v4023, v3981);
      const v4026 = stdlib.Array_set(v4022, '0', v4024);
      const v4027 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4026);
      ;
      const v4114 = null;
      const v4115 = await txn1.getOutput('deposit', 'v4114', ctc11, v4114);
      if (v2134) {
        stdlib.protect(ctc11, await interact.out(v3949, v4115), {
          at: './interface.rsh:174:11:application',
          fs: ['at ./interface.rsh:174:11:application call to [unknown function] (defined at: ./interface.rsh:174:11:function exp)', 'at ./interface.rsh:180:12:application call to "k" (defined at: ./interface.rsh:179:13:function exp)', 'at ./interface.rsh:179:13:application call to [unknown function] (defined at: ./interface.rsh:179:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
          msg: 'out',
          who: 'deposit'
          });
        }
      else {
        }
      
      const v4131 = stdlib.safeAdd(v3021, v3981);
      const v4135 = stdlib.safeAdd(v3023, v3981);
      const v4136 = {
        closed: v3019,
        manager: v3018,
        price: v3024,
        token: v3020,
        tokenAmount: v4131,
        tokenSupply: v4135,
        tokenUnit: v3022
        };
      const v12031 = v4136;
      const v12033 = v4027;
      const v12034 = v2971;
      const v12035 = v4136.closed;
      if (v12035) {
        const v12044 = v4136.manager;
        const v12046 = v4136.token;
        const v12047 = v4136.tokenAmount;
        const v12048 = v4136.tokenUnit;
        const v12049 = v4136.tokenSupply;
        const v12050 = v4136.price;
        return;
        }
      else {
        const v12037 = v4136.manager;
        const v12039 = v4136.token;
        const v12040 = v4136.tokenAmount;
        const v12041 = v4136.tokenUnit;
        const v12042 = v4136.tokenSupply;
        const v12043 = v4136.price;
        return;
        }
      break;
      }
    case 'grant0_281': {
      const v4301 = v3242[1];
      return;
      break;
      }
    case 'touch0_281': {
      const v4653 = v3242[1];
      return;
      break;
      }
    case 'updatePrice0_281': {
      const v5005 = v3242[1];
      return;
      break;
      }
    case 'updateTokenUnit0_281': {
      const v5357 = v3242[1];
      return;
      break;
      }
    case 'withdraw0_281': {
      const v5709 = v3242[1];
      return;
      break;
      }
    }
  
  
  };
export async function _grant6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _grant6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _grant6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    closed: ctc1,
    manager: ctc2,
    price: ctc3,
    token: ctc0,
    tokenAmount: ctc3,
    tokenSupply: ctc3,
    tokenUnit: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc2]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Data({
    buy0_281: ctc8,
    close0_281: ctc9,
    deposit0_281: ctc8,
    grant0_281: ctc7,
    touch0_281: ctc9,
    updatePrice0_281: ctc8,
    updateTokenUnit0_281: ctc8,
    withdraw0_281: ctc8
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3]);
  const v3114 = ctc.selfAddress();
  const v3116 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:249:26:application call to [unknown function] (defined at: ./interface.rsh:249:26:function exp)', 'at ./interface.rsh:142:29:application call to "rungrant0_281" (defined at: ./interface.rsh:249:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'in',
    who: 'grant'
    });
  const v3120 = stdlib.addressEq(v3114, v3018);
  stdlib.assert(v3120, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:250:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:249:26:application call to [unknown function] (defined at: ./interface.rsh:249:26:function exp)', 'at ./interface.rsh:142:29:application call to "rungrant0_281" (defined at: ./interface.rsh:249:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'only manager can grant',
    who: 'grant'
    });
  const v3127 = ['grant0_281', v3116];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024, v3127],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:249:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:158:14:decimal', stdlib.UInt_max, '0'), v2900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
      
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          sim_r.txns.push({
            kind: 'api',
            who: "grant"
            });
          ;
          const v4374 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4375 = v4374[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4378 = stdlib.Array_set(v4374, '0', v4375);
          const v4379 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4378);
          ;
          const v4492 = v4301[stdlib.checkedBigNumberify('./interface.rsh:249:10:spread', stdlib.UInt_max, '0')];
          const v4497 = null;
          const v4498 = await txn1.getOutput('grant', 'v4497', ctc11, v4497);
          
          const v4511 = {
            closed: v3019,
            manager: v4492,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const v12247 = v4511;
          const v12249 = v4379;
          const v12250 = v2971;
          const v12251 = v4511.closed;
          if (v12251) {
            const v12260 = v4511.manager;
            const v12262 = v4511.token;
            const v12263 = v4511.tokenAmount;
            const v12264 = v4511.tokenUnit;
            const v12265 = v4511.tokenSupply;
            const v12266 = v4511.price;
            sim_r.isHalt = false;
            }
          else {
            const v12253 = v4511.manager;
            const v12255 = v4511.token;
            const v12256 = v4511.tokenAmount;
            const v12257 = v4511.tokenUnit;
            const v12258 = v4511.tokenSupply;
            const v12259 = v4511.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
  switch (v3242[0]) {
    case 'buy0_281': {
      const v3245 = v3242[1];
      return;
      break;
      }
    case 'close0_281': {
      const v3597 = v3242[1];
      return;
      break;
      }
    case 'deposit0_281': {
      const v3949 = v3242[1];
      return;
      break;
      }
    case 'grant0_281': {
      const v4301 = v3242[1];
      undefined /* setApiDetails */;
      ;
      const v4374 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v4375 = v4374[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v4378 = stdlib.Array_set(v4374, '0', v4375);
      const v4379 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4378);
      ;
      const v4492 = v4301[stdlib.checkedBigNumberify('./interface.rsh:249:10:spread', stdlib.UInt_max, '0')];
      const v4494 = stdlib.addressEq(v3241, v3018);
      stdlib.assert(v4494, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:250:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:252:13:application call to [unknown function] (defined at: ./interface.rsh:252:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'only manager can grant',
        who: 'grant'
        });
      const v4497 = null;
      const v4498 = await txn1.getOutput('grant', 'v4497', ctc11, v4497);
      if (v2134) {
        stdlib.protect(ctc11, await interact.out(v4301, v4498), {
          at: './interface.rsh:249:11:application',
          fs: ['at ./interface.rsh:249:11:application call to [unknown function] (defined at: ./interface.rsh:249:11:function exp)', 'at ./interface.rsh:253:12:application call to "k" (defined at: ./interface.rsh:252:13:function exp)', 'at ./interface.rsh:252:13:application call to [unknown function] (defined at: ./interface.rsh:252:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
          msg: 'out',
          who: 'grant'
          });
        }
      else {
        }
      
      const v4511 = {
        closed: v3019,
        manager: v4492,
        price: v3024,
        token: v3020,
        tokenAmount: v3021,
        tokenSupply: v3023,
        tokenUnit: v3022
        };
      const v12247 = v4511;
      const v12249 = v4379;
      const v12250 = v2971;
      const v12251 = v4511.closed;
      if (v12251) {
        const v12260 = v4511.manager;
        const v12262 = v4511.token;
        const v12263 = v4511.tokenAmount;
        const v12264 = v4511.tokenUnit;
        const v12265 = v4511.tokenSupply;
        const v12266 = v4511.price;
        return;
        }
      else {
        const v12253 = v4511.manager;
        const v12255 = v4511.token;
        const v12256 = v4511.tokenAmount;
        const v12257 = v4511.tokenUnit;
        const v12258 = v4511.tokenSupply;
        const v12259 = v4511.price;
        return;
        }
      break;
      }
    case 'touch0_281': {
      const v4653 = v3242[1];
      return;
      break;
      }
    case 'updatePrice0_281': {
      const v5005 = v3242[1];
      return;
      break;
      }
    case 'updateTokenUnit0_281': {
      const v5357 = v3242[1];
      return;
      break;
      }
    case 'withdraw0_281': {
      const v5709 = v3242[1];
      return;
      break;
      }
    }
  
  
  };
export async function _touch6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _touch6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _touch6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    closed: ctc1,
    manager: ctc2,
    price: ctc3,
    token: ctc0,
    tokenAmount: ctc3,
    tokenSupply: ctc3,
    tokenUnit: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc3]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Data({
    buy0_281: ctc8,
    close0_281: ctc7,
    deposit0_281: ctc8,
    grant0_281: ctc9,
    touch0_281: ctc7,
    updatePrice0_281: ctc8,
    updateTokenUnit0_281: ctc8,
    withdraw0_281: ctc8
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3]);
  const v3026 = ctc.selfAddress();
  const v3028 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:160:23:application call to [unknown function] (defined at: ./interface.rsh:160:23:function exp)', 'at ./interface.rsh:142:29:application call to "runtouch0_281" (defined at: ./interface.rsh:160:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'in',
    who: 'touch'
    });
  const v3030 = stdlib.addressEq(v3026, v3018);
  stdlib.assert(v3030, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:160:23:application call to [unknown function] (defined at: ./interface.rsh:160:23:function exp)', 'at ./interface.rsh:142:29:application call to "runtouch0_281" (defined at: ./interface.rsh:160:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'only manager can touch',
    who: 'touch'
    });
  const v3035 = ['touch0_281', v3028];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024, v3035],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:160:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:158:14:decimal', stdlib.UInt_max, '0'), v2900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
      
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          sim_r.txns.push({
            kind: 'api',
            who: "touch"
            });
          ;
          const v4726 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4727 = v4726[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v4730 = stdlib.Array_set(v4726, '0', v4727);
          const v4731 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4730);
          ;
          const v4870 = null;
          const v4871 = await txn1.getOutput('touch', 'v4870', ctc11, v4870);
          
          const v4877 = (stdlib.le(await ctc.getBalance(), v2971) ? stdlib.checkedBigNumberify('./interface.rsh:165:38:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2971));
          const v4878 = stdlib.safeAdd(v4877, v2971);
          const v4879 = v4731[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4880 = v4879[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
          const v4881 = (sim_r.txns.push({
            kind: 'info',
            tok: v2900
            }),stdlib.le(await ctc.getBalance(v2900), v4880) ? stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2900), v4880));
          const v4882 = stdlib.safeAdd(v4881, v4880);
          const v4884 = stdlib.Array_set(v4879, '0', v4882);
          const v4885 = stdlib.Array_set(v4731, stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0'), v4884);
          const v4890 = stdlib.safeSub(v4878, v4877);
          sim_r.txns.push({
            kind: 'from',
            to: v3018,
            tok: undefined /* Nothing */
            });
          const v4891 = v4885[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4892 = v4891[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
          const v4896 = stdlib.safeSub(v4892, v4881);
          const v4898 = stdlib.Array_set(v4891, '0', v4896);
          const v4899 = stdlib.Array_set(v4885, stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0'), v4898);
          sim_r.txns.push({
            kind: 'from',
            to: v3018,
            tok: v2900
            });
          const v12463 = v2963;
          const v12465 = v4899;
          const v12466 = v4890;
          const v12467 = v2963.closed;
          if (v12467) {
            const v12476 = v2963.manager;
            const v12478 = v2963.token;
            const v12479 = v2963.tokenAmount;
            const v12480 = v2963.tokenUnit;
            const v12481 = v2963.tokenSupply;
            const v12482 = v2963.price;
            sim_r.isHalt = false;
            }
          else {
            const v12469 = v2963.manager;
            const v12471 = v2963.token;
            const v12472 = v2963.tokenAmount;
            const v12473 = v2963.tokenUnit;
            const v12474 = v2963.tokenSupply;
            const v12475 = v2963.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
  switch (v3242[0]) {
    case 'buy0_281': {
      const v3245 = v3242[1];
      return;
      break;
      }
    case 'close0_281': {
      const v3597 = v3242[1];
      return;
      break;
      }
    case 'deposit0_281': {
      const v3949 = v3242[1];
      return;
      break;
      }
    case 'grant0_281': {
      const v4301 = v3242[1];
      return;
      break;
      }
    case 'touch0_281': {
      const v4653 = v3242[1];
      undefined /* setApiDetails */;
      ;
      const v4726 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v4727 = v4726[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v4730 = stdlib.Array_set(v4726, '0', v4727);
      const v4731 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v4730);
      ;
      const v4868 = stdlib.addressEq(v3241, v3018);
      stdlib.assert(v4868, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:163:13:application call to [unknown function] (defined at: ./interface.rsh:163:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'only manager can touch',
        who: 'touch'
        });
      const v4870 = null;
      const v4871 = await txn1.getOutput('touch', 'v4870', ctc11, v4870);
      if (v2134) {
        stdlib.protect(ctc11, await interact.out(v4653, v4871), {
          at: './interface.rsh:160:11:application',
          fs: ['at ./interface.rsh:160:11:application call to [unknown function] (defined at: ./interface.rsh:160:11:function exp)', 'at ./interface.rsh:164:12:application call to "k" (defined at: ./interface.rsh:163:13:function exp)', 'at ./interface.rsh:163:13:application call to [unknown function] (defined at: ./interface.rsh:163:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
          msg: 'out',
          who: 'touch'
          });
        }
      else {
        }
      
      const v4877 = (stdlib.le(await ctc.getBalance(), v2971) ? stdlib.checkedBigNumberify('./interface.rsh:165:38:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(), v2971));
      const v4878 = stdlib.safeAdd(v4877, v2971);
      const v4879 = v4731[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
      const v4880 = v4879[stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0')];
      const v4881 = (stdlib.le(await ctc.getBalance(v2900), v4880) ? stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0') : stdlib.safeSub(await ctc.getBalance(v2900), v4880));
      const v4882 = stdlib.safeAdd(v4881, v4880);
      const v4884 = stdlib.Array_set(v4879, '0', v4882);
      const v4885 = stdlib.Array_set(v4731, stdlib.checkedBigNumberify('./interface.rsh:165:60:application', stdlib.UInt_max, '0'), v4884);
      const v4890 = stdlib.safeSub(v4878, v4877);
      ;
      const v4891 = v4885[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
      const v4892 = v4891[stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0')];
      const v4896 = stdlib.safeSub(v4892, v4881);
      const v4898 = stdlib.Array_set(v4891, '0', v4896);
      const v4899 = stdlib.Array_set(v4885, stdlib.checkedBigNumberify('./interface.rsh:165:80:application', stdlib.UInt_max, '0'), v4898);
      ;
      const v12463 = v2963;
      const v12465 = v4899;
      const v12466 = v4890;
      const v12467 = v2963.closed;
      if (v12467) {
        const v12476 = v2963.manager;
        const v12478 = v2963.token;
        const v12479 = v2963.tokenAmount;
        const v12480 = v2963.tokenUnit;
        const v12481 = v2963.tokenSupply;
        const v12482 = v2963.price;
        return;
        }
      else {
        const v12469 = v2963.manager;
        const v12471 = v2963.token;
        const v12472 = v2963.tokenAmount;
        const v12473 = v2963.tokenUnit;
        const v12474 = v2963.tokenSupply;
        const v12475 = v2963.price;
        return;
        }
      break;
      }
    case 'updatePrice0_281': {
      const v5005 = v3242[1];
      return;
      break;
      }
    case 'updateTokenUnit0_281': {
      const v5357 = v3242[1];
      return;
      break;
      }
    case 'withdraw0_281': {
      const v5709 = v3242[1];
      return;
      break;
      }
    }
  
  
  };
export async function _updatePrice6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _updatePrice6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _updatePrice6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    closed: ctc1,
    manager: ctc2,
    price: ctc3,
    token: ctc0,
    tokenAmount: ctc3,
    tokenSupply: ctc3,
    tokenUnit: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Data({
    buy0_281: ctc7,
    close0_281: ctc8,
    deposit0_281: ctc7,
    grant0_281: ctc9,
    touch0_281: ctc8,
    updatePrice0_281: ctc7,
    updateTokenUnit0_281: ctc7,
    withdraw0_281: ctc7
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3]);
  const v3076 = ctc.selfAddress();
  const v3078 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:216:32:application call to [unknown function] (defined at: ./interface.rsh:216:32:function exp)', 'at ./interface.rsh:142:29:application call to "runupdatePrice0_281" (defined at: ./interface.rsh:216:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'in',
    who: 'updatePrice'
    });
  const v3079 = v3078[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3082 = stdlib.addressEq(v3076, v3018);
  stdlib.assert(v3082, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:216:32:application call to [unknown function] (defined at: ./interface.rsh:216:32:function exp)', 'at ./interface.rsh:142:29:application call to "runupdatePrice0_281" (defined at: ./interface.rsh:216:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'only manager can update',
    who: 'updatePrice'
    });
  const v3084 = stdlib.gt(v3079, stdlib.checkedBigNumberify('./interface.rsh:218:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3084, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:216:32:application call to [unknown function] (defined at: ./interface.rsh:216:32:function exp)', 'at ./interface.rsh:142:29:application call to "runupdatePrice0_281" (defined at: ./interface.rsh:216:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'price must be greater than 0',
    who: 'updatePrice'
    });
  const v3091 = ['updatePrice0_281', v3078];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024, v3091],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:216:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:158:14:decimal', stdlib.UInt_max, '0'), v2900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
      
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          sim_r.txns.push({
            kind: 'api',
            who: "updatePrice"
            });
          ;
          const v5078 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5079 = v5078[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5082 = stdlib.Array_set(v5078, '0', v5079);
          const v5083 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5082);
          ;
          const v5254 = v5005[stdlib.checkedBigNumberify('./interface.rsh:216:10:spread', stdlib.UInt_max, '0')];
          const v5261 = null;
          const v5262 = await txn1.getOutput('updatePrice', 'v5261', ctc11, v5261);
          
          const v5275 = {
            closed: v3019,
            manager: v3018,
            price: v5254,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v3022
            };
          const v12679 = v5275;
          const v12681 = v5083;
          const v12682 = v2971;
          const v12683 = v5275.closed;
          if (v12683) {
            const v12692 = v5275.manager;
            const v12694 = v5275.token;
            const v12695 = v5275.tokenAmount;
            const v12696 = v5275.tokenUnit;
            const v12697 = v5275.tokenSupply;
            const v12698 = v5275.price;
            sim_r.isHalt = false;
            }
          else {
            const v12685 = v5275.manager;
            const v12687 = v5275.token;
            const v12688 = v5275.tokenAmount;
            const v12689 = v5275.tokenUnit;
            const v12690 = v5275.tokenSupply;
            const v12691 = v5275.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
  switch (v3242[0]) {
    case 'buy0_281': {
      const v3245 = v3242[1];
      return;
      break;
      }
    case 'close0_281': {
      const v3597 = v3242[1];
      return;
      break;
      }
    case 'deposit0_281': {
      const v3949 = v3242[1];
      return;
      break;
      }
    case 'grant0_281': {
      const v4301 = v3242[1];
      return;
      break;
      }
    case 'touch0_281': {
      const v4653 = v3242[1];
      return;
      break;
      }
    case 'updatePrice0_281': {
      const v5005 = v3242[1];
      undefined /* setApiDetails */;
      ;
      const v5078 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v5079 = v5078[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v5082 = stdlib.Array_set(v5078, '0', v5079);
      const v5083 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5082);
      ;
      const v5254 = v5005[stdlib.checkedBigNumberify('./interface.rsh:216:10:spread', stdlib.UInt_max, '0')];
      const v5256 = stdlib.addressEq(v3241, v3018);
      stdlib.assert(v5256, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:217:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'only manager can update',
        who: 'updatePrice'
        });
      const v5258 = stdlib.gt(v5254, stdlib.checkedBigNumberify('./interface.rsh:218:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5258, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:218:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'price must be greater than 0',
        who: 'updatePrice'
        });
      const v5261 = null;
      const v5262 = await txn1.getOutput('updatePrice', 'v5261', ctc11, v5261);
      if (v2134) {
        stdlib.protect(ctc11, await interact.out(v5005, v5262), {
          at: './interface.rsh:216:11:application',
          fs: ['at ./interface.rsh:216:11:application call to [unknown function] (defined at: ./interface.rsh:216:11:function exp)', 'at ./interface.rsh:221:12:application call to "k" (defined at: ./interface.rsh:220:13:function exp)', 'at ./interface.rsh:220:13:application call to [unknown function] (defined at: ./interface.rsh:220:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
          msg: 'out',
          who: 'updatePrice'
          });
        }
      else {
        }
      
      const v5275 = {
        closed: v3019,
        manager: v3018,
        price: v5254,
        token: v3020,
        tokenAmount: v3021,
        tokenSupply: v3023,
        tokenUnit: v3022
        };
      const v12679 = v5275;
      const v12681 = v5083;
      const v12682 = v2971;
      const v12683 = v5275.closed;
      if (v12683) {
        const v12692 = v5275.manager;
        const v12694 = v5275.token;
        const v12695 = v5275.tokenAmount;
        const v12696 = v5275.tokenUnit;
        const v12697 = v5275.tokenSupply;
        const v12698 = v5275.price;
        return;
        }
      else {
        const v12685 = v5275.manager;
        const v12687 = v5275.token;
        const v12688 = v5275.tokenAmount;
        const v12689 = v5275.tokenUnit;
        const v12690 = v5275.tokenSupply;
        const v12691 = v5275.price;
        return;
        }
      break;
      }
    case 'updateTokenUnit0_281': {
      const v5357 = v3242[1];
      return;
      break;
      }
    case 'withdraw0_281': {
      const v5709 = v3242[1];
      return;
      break;
      }
    }
  
  
  };
export async function _updateTokenUnit6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _updateTokenUnit6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _updateTokenUnit6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    closed: ctc1,
    manager: ctc2,
    price: ctc3,
    token: ctc0,
    tokenAmount: ctc3,
    tokenSupply: ctc3,
    tokenUnit: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Data({
    buy0_281: ctc7,
    close0_281: ctc8,
    deposit0_281: ctc7,
    grant0_281: ctc9,
    touch0_281: ctc8,
    updatePrice0_281: ctc7,
    updateTokenUnit0_281: ctc7,
    withdraw0_281: ctc7
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3]);
  const v3093 = ctc.selfAddress();
  const v3095 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:231:36:application call to [unknown function] (defined at: ./interface.rsh:231:36:function exp)', 'at ./interface.rsh:142:29:application call to "runupdateTokenUnit0_281" (defined at: ./interface.rsh:231:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'in',
    who: 'updateTokenUnit'
    });
  const v3096 = v3095[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3099 = stdlib.addressEq(v3093, v3018);
  stdlib.assert(v3099, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:231:36:application call to [unknown function] (defined at: ./interface.rsh:231:36:function exp)', 'at ./interface.rsh:142:29:application call to "runupdateTokenUnit0_281" (defined at: ./interface.rsh:231:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'only manager can update',
    who: 'updateTokenUnit'
    });
  const v3101 = stdlib.gt(v3096, stdlib.checkedBigNumberify('./interface.rsh:233:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3101, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:231:36:application call to [unknown function] (defined at: ./interface.rsh:231:36:function exp)', 'at ./interface.rsh:142:29:application call to "runupdateTokenUnit0_281" (defined at: ./interface.rsh:231:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'tokenUnit must be greater than 0',
    who: 'updateTokenUnit'
    });
  const v3104 = stdlib.safeMod(v3021, v3096);
  const v3105 = stdlib.eq(v3104, stdlib.checkedBigNumberify('./interface.rsh:234:37:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3105, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:231:36:application call to [unknown function] (defined at: ./interface.rsh:231:36:function exp)', 'at ./interface.rsh:142:29:application call to "runupdateTokenUnit0_281" (defined at: ./interface.rsh:231:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'tokenAmount must be divisible by tokenUnit',
    who: 'updateTokenUnit'
    });
  const v3112 = ['updateTokenUnit0_281', v3095];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024, v3112],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:231:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:158:14:decimal', stdlib.UInt_max, '0'), v2900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
      
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          sim_r.txns.push({
            kind: 'api',
            who: "updateTokenUnit"
            });
          ;
          const v5430 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5431 = v5430[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5434 = stdlib.Array_set(v5430, '0', v5431);
          const v5435 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5434);
          ;
          const v5631 = v5357[stdlib.checkedBigNumberify('./interface.rsh:231:10:spread', stdlib.UInt_max, '0')];
          const v5642 = null;
          const v5643 = await txn1.getOutput('updateTokenUnit', 'v5642', ctc11, v5642);
          
          const v5656 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v3021,
            tokenSupply: v3023,
            tokenUnit: v5631
            };
          const v12895 = v5656;
          const v12897 = v5435;
          const v12898 = v2971;
          const v12899 = v5656.closed;
          if (v12899) {
            const v12908 = v5656.manager;
            const v12910 = v5656.token;
            const v12911 = v5656.tokenAmount;
            const v12912 = v5656.tokenUnit;
            const v12913 = v5656.tokenSupply;
            const v12914 = v5656.price;
            sim_r.isHalt = false;
            }
          else {
            const v12901 = v5656.manager;
            const v12903 = v5656.token;
            const v12904 = v5656.tokenAmount;
            const v12905 = v5656.tokenUnit;
            const v12906 = v5656.tokenSupply;
            const v12907 = v5656.price;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
  switch (v3242[0]) {
    case 'buy0_281': {
      const v3245 = v3242[1];
      return;
      break;
      }
    case 'close0_281': {
      const v3597 = v3242[1];
      return;
      break;
      }
    case 'deposit0_281': {
      const v3949 = v3242[1];
      return;
      break;
      }
    case 'grant0_281': {
      const v4301 = v3242[1];
      return;
      break;
      }
    case 'touch0_281': {
      const v4653 = v3242[1];
      return;
      break;
      }
    case 'updatePrice0_281': {
      const v5005 = v3242[1];
      return;
      break;
      }
    case 'updateTokenUnit0_281': {
      const v5357 = v3242[1];
      undefined /* setApiDetails */;
      ;
      const v5430 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v5431 = v5430[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v5434 = stdlib.Array_set(v5430, '0', v5431);
      const v5435 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5434);
      ;
      const v5631 = v5357[stdlib.checkedBigNumberify('./interface.rsh:231:10:spread', stdlib.UInt_max, '0')];
      const v5633 = stdlib.addressEq(v3241, v3018);
      stdlib.assert(v5633, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:232:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'only manager can update',
        who: 'updateTokenUnit'
        });
      const v5635 = stdlib.gt(v5631, stdlib.checkedBigNumberify('./interface.rsh:233:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5635, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:233:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'tokenUnit must be greater than 0',
        who: 'updateTokenUnit'
        });
      const v5638 = stdlib.safeMod(v3021, v5631);
      const v5639 = stdlib.eq(v5638, stdlib.checkedBigNumberify('./interface.rsh:234:37:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v5639, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:234:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'tokenAmount must be divisible by tokenUnit',
        who: 'updateTokenUnit'
        });
      const v5642 = null;
      const v5643 = await txn1.getOutput('updateTokenUnit', 'v5642', ctc11, v5642);
      if (v2134) {
        stdlib.protect(ctc11, await interact.out(v5357, v5643), {
          at: './interface.rsh:231:11:application',
          fs: ['at ./interface.rsh:231:11:application call to [unknown function] (defined at: ./interface.rsh:231:11:function exp)', 'at ./interface.rsh:237:12:application call to "k" (defined at: ./interface.rsh:236:13:function exp)', 'at ./interface.rsh:236:13:application call to [unknown function] (defined at: ./interface.rsh:236:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
          msg: 'out',
          who: 'updateTokenUnit'
          });
        }
      else {
        }
      
      const v5656 = {
        closed: v3019,
        manager: v3018,
        price: v3024,
        token: v3020,
        tokenAmount: v3021,
        tokenSupply: v3023,
        tokenUnit: v5631
        };
      const v12895 = v5656;
      const v12897 = v5435;
      const v12898 = v2971;
      const v12899 = v5656.closed;
      if (v12899) {
        const v12908 = v5656.manager;
        const v12910 = v5656.token;
        const v12911 = v5656.tokenAmount;
        const v12912 = v5656.tokenUnit;
        const v12913 = v5656.tokenSupply;
        const v12914 = v5656.price;
        return;
        }
      else {
        const v12901 = v5656.manager;
        const v12903 = v5656.token;
        const v12904 = v5656.tokenAmount;
        const v12905 = v5656.tokenUnit;
        const v12906 = v5656.tokenSupply;
        const v12907 = v5656.price;
        return;
        }
      break;
      }
    case 'withdraw0_281': {
      const v5709 = v3242[1];
      return;
      break;
      }
    }
  
  
  };
export async function _withdraw6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _withdraw6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _withdraw6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Object({
    closed: ctc1,
    manager: ctc2,
    price: ctc3,
    token: ctc0,
    tokenAmount: ctc3,
    tokenSupply: ctc3,
    tokenUnit: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([ctc3]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc2]);
  const ctc10 = stdlib.T_Data({
    buy0_281: ctc7,
    close0_281: ctc8,
    deposit0_281: ctc7,
    grant0_281: ctc9,
    touch0_281: ctc8,
    updatePrice0_281: ctc7,
    updateTokenUnit0_281: ctc7,
    withdraw0_281: ctc7
    });
  const ctc11 = stdlib.T_Null;
  
  
  const [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3]);
  const v3054 = ctc.selfAddress();
  const v3056 = stdlib.protect(ctc7, await interact.in(), {
    at: './interface.rsh:1:23:application',
    fs: ['at ./interface.rsh:193:29:application call to [unknown function] (defined at: ./interface.rsh:193:29:function exp)', 'at ./interface.rsh:142:29:application call to "runwithdraw0_281" (defined at: ./interface.rsh:193:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'in',
    who: 'withdraw'
    });
  const v3057 = v3056[stdlib.checkedBigNumberify('./interface.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3060 = stdlib.addressEq(v3054, v3018);
  stdlib.assert(v3060, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:193:29:application call to [unknown function] (defined at: ./interface.rsh:193:29:function exp)', 'at ./interface.rsh:142:29:application call to "runwithdraw0_281" (defined at: ./interface.rsh:193:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'only manager can withdraw',
    who: 'withdraw'
    });
  const v3062 = stdlib.gt(v3057, stdlib.checkedBigNumberify('./interface.rsh:195:19:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v3062, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:193:29:application call to [unknown function] (defined at: ./interface.rsh:193:29:function exp)', 'at ./interface.rsh:142:29:application call to "runwithdraw0_281" (defined at: ./interface.rsh:193:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'withdraw must be greater than 0',
    who: 'withdraw'
    });
  const v3065 = stdlib.safeMul(v3057, v3022);
  const v3067 = stdlib.le(v3065, v3021);
  stdlib.assert(v3067, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./interface.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:193:29:application call to [unknown function] (defined at: ./interface.rsh:193:29:function exp)', 'at ./interface.rsh:142:29:application call to "runwithdraw0_281" (defined at: ./interface.rsh:193:10:function exp)', 'at ./interface.rsh:142:29:application call to [unknown function] (defined at: ./interface.rsh:142:29:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: 'withdraw must be less than or equal to token amount',
    who: 'withdraw'
    });
  const v3074 = ['withdraw0_281', v3056];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2900, v2963, v2970, v2971, v3018, v3019, v3020, v3021, v3022, v3023, v3024, v3074],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./interface.rsh:193:10:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./interface.rsh:158:14:decimal', stdlib.UInt_max, '0'), v2900]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
      
      switch (v3242[0]) {
        case 'buy0_281': {
          const v3245 = v3242[1];
          
          break;
          }
        case 'close0_281': {
          const v3597 = v3242[1];
          
          break;
          }
        case 'deposit0_281': {
          const v3949 = v3242[1];
          
          break;
          }
        case 'grant0_281': {
          const v4301 = v3242[1];
          
          break;
          }
        case 'touch0_281': {
          const v4653 = v3242[1];
          
          break;
          }
        case 'updatePrice0_281': {
          const v5005 = v3242[1];
          
          break;
          }
        case 'updateTokenUnit0_281': {
          const v5357 = v3242[1];
          
          break;
          }
        case 'withdraw0_281': {
          const v5709 = v3242[1];
          sim_r.txns.push({
            kind: 'api',
            who: "withdraw"
            });
          ;
          const v5782 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5783 = v5782[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
          const v5786 = stdlib.Array_set(v5782, '0', v5783);
          const v5787 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5786);
          ;
          const v6012 = v5709[stdlib.checkedBigNumberify('./interface.rsh:193:10:spread', stdlib.UInt_max, '0')];
          const v6019 = stdlib.safeMul(v6012, v3022);
          const v6024 = null;
          const v6025 = await txn1.getOutput('withdraw', 'v6024', ctc11, v6024);
          
          const v6034 = v5787[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6035 = v6034[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
          const v6039 = stdlib.safeSub(v6035, v6019);
          const v6041 = stdlib.Array_set(v6034, '0', v6039);
          const v6042 = stdlib.Array_set(v5787, stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0'), v6041);
          sim_r.txns.push({
            kind: 'from',
            to: v3018,
            tok: v2900
            });
          const v6053 = stdlib.safeSub(v3021, v6019);
          const v6057 = stdlib.safeSub(v3023, v6019);
          const v6058 = {
            closed: v3019,
            manager: v3018,
            price: v3024,
            token: v3020,
            tokenAmount: v6053,
            tokenSupply: v6057,
            tokenUnit: v3022
            };
          const v13111 = v6058;
          const v13113 = v6042;
          const v13114 = v2971;
          const v13115 = v6058.closed;
          if (v13115) {
            const v13124 = v6058.manager;
            const v13126 = v6058.token;
            const v13127 = v6058.tokenAmount;
            const v13128 = v6058.tokenUnit;
            const v13129 = v6058.tokenSupply;
            const v13130 = v6058.price;
            sim_r.isHalt = false;
            }
          else {
            const v13117 = v6058.manager;
            const v13119 = v6058.token;
            const v13120 = v6058.tokenAmount;
            const v13121 = v6058.tokenUnit;
            const v13122 = v6058.tokenSupply;
            const v13123 = v6058.price;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc4, ctc6, ctc3, ctc2, ctc1, ctc0, ctc3, ctc3, ctc3, ctc3, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v3242], secs: v3244, time: v3243, didSend: v2134, from: v3241 } = txn1;
  switch (v3242[0]) {
    case 'buy0_281': {
      const v3245 = v3242[1];
      return;
      break;
      }
    case 'close0_281': {
      const v3597 = v3242[1];
      return;
      break;
      }
    case 'deposit0_281': {
      const v3949 = v3242[1];
      return;
      break;
      }
    case 'grant0_281': {
      const v4301 = v3242[1];
      return;
      break;
      }
    case 'touch0_281': {
      const v4653 = v3242[1];
      return;
      break;
      }
    case 'updatePrice0_281': {
      const v5005 = v3242[1];
      return;
      break;
      }
    case 'updateTokenUnit0_281': {
      const v5357 = v3242[1];
      return;
      break;
      }
    case 'withdraw0_281': {
      const v5709 = v3242[1];
      undefined /* setApiDetails */;
      ;
      const v5782 = v2970[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v5783 = v5782[stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0')];
      const v5786 = stdlib.Array_set(v5782, '0', v5783);
      const v5787 = stdlib.Array_set(v2970, stdlib.checkedBigNumberify('./interface.rsh:142:29:dot', stdlib.UInt_max, '0'), v5786);
      ;
      const v6012 = v5709[stdlib.checkedBigNumberify('./interface.rsh:193:10:spread', stdlib.UInt_max, '0')];
      const v6014 = stdlib.addressEq(v3241, v3018);
      stdlib.assert(v6014, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:194:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'only manager can withdraw',
        who: 'withdraw'
        });
      const v6016 = stdlib.gt(v6012, stdlib.checkedBigNumberify('./interface.rsh:195:19:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v6016, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:195:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'withdraw must be greater than 0',
        who: 'withdraw'
        });
      const v6019 = stdlib.safeMul(v6012, v3022);
      const v6021 = stdlib.le(v6019, v3021);
      stdlib.assert(v6021, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./interface.rsh:196:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
        msg: 'withdraw must be less than or equal to token amount',
        who: 'withdraw'
        });
      const v6024 = null;
      const v6025 = await txn1.getOutput('withdraw', 'v6024', ctc11, v6024);
      if (v2134) {
        stdlib.protect(ctc11, await interact.out(v5709, v6025), {
          at: './interface.rsh:193:11:application',
          fs: ['at ./interface.rsh:193:11:application call to [unknown function] (defined at: ./interface.rsh:193:11:function exp)', 'at ./interface.rsh:202:12:application call to "k" (defined at: ./interface.rsh:201:13:function exp)', 'at ./interface.rsh:201:13:application call to [unknown function] (defined at: ./interface.rsh:201:13:function exp)', 'at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
          msg: 'out',
          who: 'withdraw'
          });
        }
      else {
        }
      
      const v6034 = v5787[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
      const v6035 = v6034[stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0')];
      const v6039 = stdlib.safeSub(v6035, v6019);
      const v6041 = stdlib.Array_set(v6034, '0', v6039);
      const v6042 = stdlib.Array_set(v5787, stdlib.checkedBigNumberify('./interface.rsh:203:52:application', stdlib.UInt_max, '0'), v6041);
      ;
      const v6053 = stdlib.safeSub(v3021, v6019);
      const v6057 = stdlib.safeSub(v3023, v6019);
      const v6058 = {
        closed: v3019,
        manager: v3018,
        price: v3024,
        token: v3020,
        tokenAmount: v6053,
        tokenSupply: v6057,
        tokenUnit: v3022
        };
      const v13111 = v6058;
      const v13113 = v6042;
      const v13114 = v2971;
      const v13115 = v6058.closed;
      if (v13115) {
        const v13124 = v6058.manager;
        const v13126 = v6058.token;
        const v13127 = v6058.tokenAmount;
        const v13128 = v6058.tokenUnit;
        const v13129 = v6058.tokenSupply;
        const v13130 = v6058.price;
        return;
        }
      else {
        const v13117 = v6058.manager;
        const v13119 = v6058.token;
        const v13120 = v6058.tokenAmount;
        const v13121 = v6058.tokenUnit;
        const v13122 = v6058.tokenSupply;
        const v13123 = v6058.price;
        return;
        }
      break;
      }
    }
  
  
  };
export async function buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _buy6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _close6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _deposit6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function grant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for grant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for grant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _grant6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _touch6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function updatePrice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for updatePrice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for updatePrice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _updatePrice6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function updateTokenUnit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for updateTokenUnit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for updateTokenUnit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _updateTokenUnit6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function withdraw(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for withdraw expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for withdraw expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _withdraw6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`buy(uint64)byte[0]`, `close()byte[0]`, `deposit(uint64)byte[0]`, `grant(address)byte[0]`, `touch()byte[0]`, `updatePrice(uint64)byte[0]`, `updateTokenUnit(uint64)byte[0]`, `withdraw(uint64)byte[0]`],
    pure: [`state()(address,byte,uint64,uint64,uint64,uint64,uint64)`],
    sigs: [`buy(uint64)byte[0]`, `close()byte[0]`, `deposit(uint64)byte[0]`, `grant(address)byte[0]`, `state()(address,byte,uint64,uint64,uint64,uint64,uint64)`, `touch()byte[0]`, `updatePrice(uint64)byte[0]`, `updateTokenUnit(uint64)byte[0]`, `withdraw(uint64)byte[0]`]
    },
  appApproval: `BiAaAAEECBgGBUECKOvxj50Ghb3WuAq13MGZDNWOnq4Npv2N+gemquLvAsve+4MGmcTrqwEHAyCgjQYpMTkhJgMAAQABASI1ADEYQQlsKGRJIls1ASVbNQI2GgAXSUEBXCI1BCM1BkkhCgxAAOdJIQsMQABKSSEMDEAALUkhDQxAABQhDRJENhoBNf8pNP9QIQSvUEIBSyEMEkQ2GgE1/4ABAzT/UEIBOSELEkQ2GgE1/4ABBzT/UCEEr1BCASNJIQ4MQAB5IQ4SRDQBSSEFDEAAOCEFEkQpZCpkUEk1A1dqIDQDV4oBUDQDV4sIUDQDV5MIUDQDV5sIUDQDV6MIUDQDV6sIUDUHQginJBJEKWRJNQNXCCA0A1coAVA0A1cpCFA0A1cxCFA0A1c5CFA0A1dBCFA0A1dJCFA1B0IIcyEKEkQ2GgE1/4ABAjT/UCEEr1BCAI1JIQ8MQAAwSSEQDEAAEyEQEkQoNf+AAQQ0/1AyA1BCAGwhDxJENhoBNf+AAQU0/1AhBK9QQgBWSSERDEAAFiEREkQ2GgE1/4ABBjT/UCEEr1BCADmB9biIMBJEKDX/KjT/UDIDUEIAJTYaAhc1BDYaAzYaARdJIQgMQAVTSSQMQAUISSEGDEAEySEGEkQhBTQBEkQ0BEkiEkw0AhIRRClkKmRQSTUDSUpKSkoiWzX/V1ERNf6BYls1/VdqIDX8V4oBFzX7gYsBWzX6gZMBWzX5gZsBWzX4gaMBWzX3gasBWzX2STUFNfWABPPyBSA09VCwNPUiVUkkDEACRUkhBQxAARZJIRIMQAClIRISRDT1VwEINfQ0/lcAEUk180lXAAg18VcICTTxTFA18jT0FzXxMQA0/BJENPEiDUQ08TT4C0k18DT5DkSACAAAAAAAABeIsCg1BzTyVwARNe+xIrIBNPCyEiSyEDT8shQ0/7IRszT/NPsWUQcINPxQNPYWUDT6FlA0+TTwCRZQNPc08AkWUDT4FlAyBjTvSSJbNPAJFjXuVwgJNO5MUDT9QgWSSDT1VwEINfQ0/lcAETXzNPQXNfIxADT8EkQ08iINRDT5NPIYIhJEgAgAAAAAAAAWCrAoNQc0/zT7FlEHCDT8UDT2FlA0+hZQNPkWUDT3FlA08hZQMgY080lXAAg18VcICTTxTFA0/UIFKEkhBgxAAGJINPVXAQg19DT+VwARNfM09Bc18jEANPwSRDTyIg1EgAgAAAAAAAAUjbAoNQc0/zT7FlEHCDT8UDTyFlA0+hZQNPkWUDT3FlA0+BZQMgY080lXAAg18VcICTTxTFA0/UIEv0g0/lcAEUk19ElXAAg18lcICTTyTFA18zEANPwSRIAIAAAAAAAAEwawKDUHMgpgMgp4CTT9CTXyNPNXABFJNfEiWzXwMgo0/3AASDTwSgxAAAQJQgADSEgiNe808TTvNPAIFjXtVwgJNO1MUDXusSKyATTysggjshA0/LIHszTuVwARNe2xIrIBNO+yEiSyEDT8shQ0/7IRszT/NANXCEkyBjTtSSJbNO8JFjXsVwgJNOxMUDTyNP0INPIJQgQASSEIDEAA2EkhEwxAAFhINPVXASA19DT+VwARNfMxADT8EkSACAAAAAAAABGRsCg1BzT/NPsWUQcINPRQNPYWUDT6FlA0+RZQNPcWUDT4FlAyBjTzSVcACDXyVwgJNPJMUDT9QgOaSDT1VwEINfQ09Bc18zEANPwSRDTzIg1ENPM0+As18jT+VwARNfE08jT/iATIgAgAAAAAAAAQErAoNQc0/zT7FlEHCDT8UDT2FlA0+hZQNPk08ggWUDT3NPIIFlA0+BZQMgY08UkiWzTyCBY18FcICTTwTFA0/UIDIUkjDEAAeEg0/lcAEUk19ElXAAg18lcICTTyTFA18zEANPwSRIAIAAAAAAAADo+wKDUHNPNXABE18rEisgE0+bISJLIQNPyyFDT/shGzNP8qNPxQNPYWUDT6FlAlr1Alr1A0+BZQMgY08kkiWzT5CRY18VcICTTxTFA0/UICo0g09VcBCDX0NPQXSTXzNPgLSTXyNPkORDTzNPYLNfE08YgDwjT+VwARSTXwSVcACDXuVwgJNO5MUDXvgAgAAAAAAAANBLAoNQexIrIBNPGyCCOyEDT8sgezNO9XABE17rEisgE08rISJLIQMQCyFDT/shGzNP80+xZRBwg0/FA09hZQNPoWUDT5NPIJFlA09xZQNPgWUDIGNO5JIls08gkWNe1XCAk07UxQNP008Qg08QlCAe5IJDQBEkQ0BEkiEkw0AhIRRClkNQOABJEnNPOwsSKyASKyEiSyEDIJshUyCrIUNAMiW7IRs0ICiyEIEkQjNAESRDQESSISTDQCEhFEKWQ1A4AEQbFATbAyBjQDIQdbD0SxIrIBIrISJLIQMgmyFTIKshQ0AyEJW7IRs0ICRkkjDEAAzkgjNAESRDQESSISTDQCEhFEKWRJNQNJSSEUWzX/IQlbNf5XMBE1/Uk1BUlJIls1/CVbNfuBEFs1+oAEzfmklDT8FlA0+xZQNPoWULAyBjQDIQdbDEQ0/CINRDT6Ig1ENPsiDUQ0/DT7GCISRDT/iAI9NP1XABE1+TT8NP6IAkexIrIBNP+yCCOyEDQDVwAgsgezgARWUJgEsDT+KTEAUDT6FlA0/hZQNPwWUDT8FlA0+xZQMgY0+UkiWzT8CBY1+FcICTT4TFA0/0kJQgCdSCEViAHaIjQBEkQ0BEkiEkw0AhIRREk1BUlKVwAgNf8hFFs1/iEJWzX9gTBbNfyABOjBUMg0/1A0/hZQNP0WUDT8FlCwgRGvSTX7VwARJa81+VcICTT5TFA1+iEViAGAsSKyASKyEiSyEDIKshQ0/LIRszIGNP0INfk0/zT+FlA0/BZQNPpQNPkWUClLAVcASWdIIzUBMgY1AkIA8TX/Nf41/TX8Nfs0/FcAARdBAFg0/FcBIDX6NPwhFls1+TT8IRdbNfg0/CEHWzX3NPwhGFs19jT8IRlbNfU0+xY0+lAqUDT5FlA0+BZQNPcWUDT2FlA09RZQKUsBVwBRZ0gkNQEyBjUCQgCGNPxXASA1+jT8IRZbNfk0/CEXWzX4NPwhB1s19zT8IRhbNfY0/CEZWzX1NPsWNPxQNP5QNP8WUDT6UClQNPkWUDT4FlA09xZQNPYWUDT1FlApSwFXAH9nKksBV380Z0ghBTUBMgY1AkIAHDEZIQYSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhEzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 179,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v2897",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2898",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2899",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v2900",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v2897",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v2898",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2899",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v2900",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v2936",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2937",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2938",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_buy0_281",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_close0_281",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_deposit0_281",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_grant0_281",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_touch0_281",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_updatePrice0_281",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_updateTokenUnit0_281",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_withdraw0_281",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v3242",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3332",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3727",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4114",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4497",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4870",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v5261",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v5642",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v6024",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "appLaunch",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v2936",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2937",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v2938",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_buy0_281",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_close0_281",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_deposit0_281",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_grant0_281",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_touch0_281",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_updatePrice0_281",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_updateTokenUnit0_281",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T17",
                    "name": "_withdraw0_281",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T19",
                "name": "v3242",
                "type": "tuple"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "buy",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "close",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "grant",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "state",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "manager",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "closed",
            "type": "bool"
          },
          {
            "internalType": "address payable",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenUnit",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "touch",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "updatePrice",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "updateTokenUnit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162003e9138038062003e918339810160408190526200002691620004a5565b600080554360035562000038620002d3565b6040805133815283516020808301919091528085015180516001600160a01b03908116848601529181015160608085019190915281850151608085015201511660a082015290517ff3f7b40e3e3b9f4100b9e92d74f44191fabe2129aaf0490c6d70d95395a3def79181900360c00190a1805160009081905281516020908101829052825160409081018390528351828501805191909152805182516060810184528581528251518501519481019490945290515182015115159183019190915262000106929091620001ce565b6040820152620001193415600862000251565b62000133438360200151604001516200027c60201b60201c565b60608201526200014262000322565b60208084018051516001600160a01b0390811684528151830151848401529051606090810151909116604080850191909152848101518285015290840151608084015260016000819055439055516200019e918391016200056c565b60405160208183030381529060405260029080519060200190620001c49291906200035e565b505050506200067b565b620001d8620003ed565b60005b60018110156200022e57848160018110620001fa57620001fa62000556565b602002015182826001811062000214576200021462000556565b602002015280620002258162000605565b915050620001db565b508181846001811062000245576200024562000556565b60200201529392505050565b81620002785760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b6000826200028b838262000623565b9150811015620002cd5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016200026f565b92915050565b6040805160e0810190915260006080820181815260a0830182905260c083019190915281526020810162000306620003ed565b815260200162000315620003ed565b8152602001600081525090565b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200162000315620003ed565b8280546200036c906200063e565b90600052602060002090601f016020900481019282620003905760008555620003db565b82601f10620003ab57805160ff1916838001178555620003db565b82800160010185558215620003db579182015b82811115620003db578251825591602001919060010190620003be565b50620003e99291506200043a565b5090565b60405180602001604052806001905b62000423604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003fc5790505090565b5b80821115620003e957600081556001016200043b565b604051608081016001600160401b03811182821017156200048257634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620004a057600080fd5b919050565b600081830360a0811215620004b957600080fd5b604080519081016001600160401b0381118282101715620004ea57634e487b7160e01b600052604160045260246000fd5b604052835181526080601f19830112156200050457600080fd5b6200050e62000451565b91506200051e6020850162000488565b82526040840151602083015260608401516040830152620005426080850162000488565b606083015260208101919091529392505050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015160e08501939192919083860160005b6001811015620005d95782518051835285810151868401528401511515848301529184019190850190600101620005a7565b505050505050608083015160c083015292915050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156200061c576200061c620005ef565b5060010190565b60008219821115620006395762000639620005ef565b500190565b600181811c908216806200065357607f821691505b602082108114156200067557634e487b7160e01b600052602260045260246000fd5b50919050565b613806806200068b6000396000f3fe6080604052600436106100eb5760003560e01c8063a7661d5411610084578063c19d93fb11610056578063c19d93fb146101f5578063d96a094a14610268578063f9ae2d721461027b578063fd5dba2d1461028e57005b8063a7661d5414610199578063ab53f2c6146101ac578063b5e223e0146101cf578063b6b55f25146101e257005b80637eea518c116100bd5780637eea518c1461015657806383230757146101695780638d6cc56d1461017e578063a55526db1461019157005b80631e93b0f1146100f45780632e1a7d4d1461011857806343d726d61461013b57806370284d191461014357005b366100f257005b005b34801561010057600080fd5b506003545b6040519081526020015b60405180910390f35b61012b610126366004612d46565b6102a1565b604051901515815260200161010f565b61012b6102dd565b61012b610151366004612d74565b61030d565b6100f2610164366004612d91565b610351565b34801561017557600080fd5b50600154610105565b61012b61018c366004612d46565b610375565b61012b6103b0565b6100f26101a7366004612d91565b6103e0565b3480156101b857600080fd5b506101c1610400565b60405161010f929190612dd5565b61012b6101dd366004612d46565b61049d565b61012b6101f0366004612d46565b6104d8565b34801561020157600080fd5b5061020a610513565b6040805182516001600160a01b039081168252602080850151151590830152838301511691810191909152606080830151908201526080808301519082015260a0808301519082015260c0918201519181019190915260e00161010f565b61012b610276366004612d46565b61052c565b6100f2610289366004612e0f565b610563565b6100f261029c366004612e22565b610583565b60006102ab6127fb565b6020810180515160079052515161010001518390526102c861281a565b6102d282826105a3565b60e001519392505050565b60006102e76127fb565b602081015151600190526102f961281a565b61030382826105a3565b6020015192915050565b60006103176127fb565b60208101805151600390525151608001516001600160a01b038416905261033c61281a565b61034682826105a3565b606001519392505050565b61035961281a565b61037161036b36849003840184612f30565b82611828565b5050565b600061037f6127fb565b6020810180515160059052515160c0015183905261039b61281a565b6103a582826105a3565b60a001519392505050565b60006103ba6127fb565b602081015151600490526103cc61281a565b6103d682826105a3565b6080015192915050565b6103e861281a565b6103716103fa36849003840184612f30565b82611978565b60006060600054600280805461041590612f86565b80601f016020809104026020016040519081016040528092919081815260200182805461044190612f86565b801561048e5780601f106104635761010080835404028352916020019161048e565b820191906000526020600020905b81548152906001019060200180831161047157829003601f168201915b50505050509050915091509091565b60006104a76127fb565b6020810180515160069052515160e001518390526104c361281a565b6104cd82826105a3565b60c001519392505050565b60006104e26127fb565b60208101805151600290525151606001518390526104fe61281a565b61050882826105a3565b604001519392505050565b61051b61285e565b600061052681611a9d565b91505090565b60006105366127fb565b6020818101805151600090525151015183905261055161281a565b61055b82826105a3565b519392505050565b61056b61281a565b61037161057d3684900384018461301d565b826105a3565b61058b61281a565b61037161059d36849003840184613111565b82611dcc565b6105b3600660005414603761212d565b81516105ce9015806105c757508251600154145b603861212d565b6000808055600280546105e090612f86565b80601f016020809104026020016040519081016040528092919081815260200182805461060c90612f86565b80156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b505050505080602001905181019061067191906132b8565b905061067b6128af565b7ff83723a0d9f4d4a88a682212b8c75b315e678bfd4cd310e6d9c94f69ebebfc3733856040516106ac929190613379565b60405180910390a160006020850151515160078111156106ce576106ce612e34565b14156109c757602080850151510151808252516101008301516106f19190612153565b6020820181905260e083015161070a911115601961212d565b80515161014083015161071d9190612153565b60408201819052610731903414601a61212d565b6107b9826040015160006040518060600160405280866040015160006001811061075d5761075d613442565b6020020151600001518152602001866040015160006001811061078257610782613442565b602002015160200151815260200186604001516000600181106107a7576107a7613442565b602002015160400151151590526121b8565b606082015281516107d8906107d1903390600061222c565b601b61212d565b604051600081527f3bac0b028dd286ea7d9a03fa452ca32da0a09c6877acd21dcfb0466e845219409060200160405180910390a16000808452608083015160408084015190516001600160a01b039092169281156108fc029290818181858888f1935050505015801561084f573d6000803e3d6000fd5b506108638260000151338360200151612244565b60a08201516080808301805192151590925283015181516001600160a01b0391821660209182015261014085015183516040015260c08501519251929091166060929092019190915260e0830151908201516108bf9190612258565b6080808301805190910191909152610120830151815160a00152610100830151905160c001526108ed612a09565b825181516001600160a01b03909116905260808201516020808301805192909252905143908201526060808401805160408051938401905290515151928501516109849391926000929091829161094391612258565b8152602001866060015160006001811061095f5761095f613442565b602002015160200151815260200186606001516000600181106107a7576107a7613442565b8160200151604001819052506109af6109a5846060015184604001516122a7565b8360400151612258565b6020820151606001526109c1816122f4565b50611822565b60016020850151515160078111156109e1576109e1612e34565b1415610bcb576109f33415601c61212d565b610a1f826040015160006040518060600160405280866040015160006001811061075d5761075d613442565b60a08201528151610a3e90610a37903390600061222c565b601d61212d565b610a6182608001516001600160a01b0316336001600160a01b031614601e61212d565b604051600081527f9f3638f4f55f367093bfded091672768ddcaf44f0058184de66bcbe58f13749a9060200160405180910390a1600060208401528151608083015160e0840151610ab3929190612244565b60c080820180516001905260808085015182516001600160a01b03918216602090910152610140860151835160400152858401518351911660609190910152815160009101819052815160a00152610100840151905190910152610b15612a09565b825181516001600160a01b03909116905260c0820151602080830180519290925290514391015260a08201805160408051606081019091529151515160e0860151610bab9360009290918291610b6a91612258565b81526020018660a00151600060018110610b8657610b86613442565b60200201516020015181526020018660a001516000600181106107a7576107a7613442565b60208201805160400191909152606080850151915101526109c1816122f4565b6002602085015151516007811115610be557610be5612e34565b1415610de7576020840151516060015160e08201526080820151610c15906001600160a01b03163314601f61212d565b60e081015151610c28901515602061212d565b610c3f8160e0015160000151836101000151612153565b610100820152610c513415602161212d565b610c6f610c6833846000015184610100015161222c565b602261212d565b604051600081527f9443927087f9bf8b5cefd40317004d95dc4031001344817a3d13e7dea1aad2d09060200160405180910390a1600060408085019190915260a083015161012083018051911515909152608084015181516001600160a01b0391821660209091015261014085015182519093019290925260c0840151905191166060919091015260e0820151610100820151610d0c91906122a7565b8161012001516080018181525050610d2e8261012001518261010001516122a7565b6101208201805160a00191909152610100830151905160c00152610d50612a09565b825181516001600160a01b03909116905261012082015160208083018051929092529051439101526040808401805182516060810190935290515151610100850151610bab9360009290918291610da6916122a7565b81526020018760400151600060018110610dc257610dc2613442565b602002015160200151815260200187604001516000600181106107a7576107a7613442565b6003602085015151516007811115610e0157610e01612e34565b1415610f7e5760208401515160800151610140820152610e233415602361212d565b610e3d610e36338460000151600061222c565b602461212d565b610e6082608001516001600160a01b0316336001600160a01b031614602561212d565b604051600081527fe424bd137286128d781863f8329fdeef1492d318e284724b63f725a650fc0dd29060200160405180910390a1600060608085019190915260a08084015161016084018051911515909152610140808501515182516001600160a01b039182166020909101529086015182516040015260c08087015183519216919094015260e0850151815160800152610120850151815190920191909152610100840151905190910152610f14612a09565b825181516001600160a01b0390911690526101608201516020808301805192909252905143910152604080840180518251606081019093529051610bab926000918190835b60200201516000015181526020018760400151600060018110610dc257610dc2613442565b6004602085015151516007811115610f9857610f98612e34565b141561126557610faa3415602661212d565b610fd6826040015160006040518060600160405280866040015160006001811061075d5761075d613442565b6101808201528151610ff690610fef903390600061222c565b602761212d565b61101982608001516001600160a01b0316336001600160a01b031614602861212d565b604051600081527f1ea1a73598327df1282b23013d9553a353f963783935b3ef6385b8dee6f0bbe19060200160405180910390a16000608084015260608201514790811061106d5760608301518103611070565b60005b6101a08301525081516000906110869030612502565b610180830151515190915081106110a657610180820151515181036110a9565b60005b826101c001818152505050611139816101800151600060405180606001604052806110f6866101c001518761018001516000600181106110eb576110eb613442565b6020020151516122a7565b815260200185610180015160006001811061111357611113613442565b60200201516020015181526020018561018001516000600181106107a7576107a7613442565b6101e082015260808201516101a08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611180573d6000803e3d6000fd5b5061119982600001518360800151836101c00151612244565b6111a1612a09565b825181516001600160a01b03909116905260208084015181830180519190915251439101526101e0820180516040805160608101909152915151516101c085015161123993600092909182916111f691612258565b8152602001866101e0015160006001811061121357611213613442565b6020020151602001518152602001866101e001516000600181106107a7576107a7613442565b6020820151604001526101a082015160608401516109af9161125a916122a7565b836101a00151612258565b600560208501515151600781111561127f5761127f612e34565b14156113f65760208401515160c001516102008201526112a13415602961212d565b6112bb6112b4338460000151600061222c565b602a61212d565b6112de82608001516001600160a01b0316336001600160a01b031614602b61212d565b610200810151516112f2901515602c61212d565b604051600081527fae4ffb33ec51b2d13f7bac0fabb42be1cb3ba4f1911349760f155197ecca24469060200160405180910390a1600060a080850191909152828101516102208301805191151590915260808085015182516001600160a01b039182166020909101526102008501515183516040015260c080870151845192166060929092019190915260e08601518351909201919091526101208501518251909301929092526101008401519051909101526113ad612a09565b825181516001600160a01b0390911690526102208201516020808301805192909252905143910152604080840180518251606081019093529051610bab92600091819083610f59565b600660208501515151600781111561141057611410612e34565b14156115a55760208401515160e001516102408201526114323415602d61212d565b61144c611445338460000151600061222c565b602e61212d565b61146f82608001516001600160a01b0316336001600160a01b031614602f61212d565b61024081015151611483901515603061212d565b6114a7600061149f8460e00151846102400151600001516125ce565b14603161212d565b604051600081527f7f7b3c9c09b67d9bf365a5d8441e732c4878cdf288ce23eb1a2cf45f754961cf9060200160405180910390a1600060c08085019190915260a0808401516102608401805191151590915260808086015182516001600160a01b0391821660209091015261014087015183516040015286850151835191166060919091015260e08601518251909101526101208501518151909201919091526102408301515190519091015261155c612a09565b825181516001600160a01b0390911690526102608201516020808301805192909252905143910152604080840180518251606081019093529051610bab92600091819083610f59565b60076020850151515160078111156115bf576115bf612e34565b14156118225760208401515161010001516102808201526115e23415603261212d565b61160e826040015160006040518060600160405280866040015160006001811061075d5761075d613442565b6102a0820152815161162e90611627903390600061222c565b603361212d565b61165182608001516001600160a01b0316336001600160a01b031614603461212d565b61028081015151611665901515603561212d565b61167d81610280015160000151836101000151612153565b6102c0820181905260e0830151611697911115603661212d565b604051600081527ff1967f3cc10ad8052003395dac4edb90a7bf63515e9fd3276251f0bc73d155db9060200160405180910390a1600060e0840152815160808301516102c08301516116ea929190612244565b60a08201516102e082018051911515909152608083015181516001600160a01b0391821660209091015261014084015182516040015260c0840151915191166060919091015260e08201516102c08201516117459190612258565b6102e0820151608001526101208201516102c08201516117659190612258565b6102e08201805160a00191909152610100830151905160c00152611787612a09565b825181516001600160a01b0390911690526102e082015160208083018051929092529051439101526102a0820180516040805160608101909152915151516102c0850151610bab93600092909182916117df91612258565b8152602001866102a001516000600181106117fc576117fc613442565b6020020151602001518152602001866102a001516000600181106107a7576107a7613442565b50505050565b611838600160005414601361212d565b815161185390158061184c57508251600154145b601461212d565b60008080556002805461186590612f86565b80601f016020809104026020016040519081016040528092919081815260200182805461189190612f86565b80156118de5780601f106118b3576101008083540402835291602001916118de565b820191906000526020600020905b8154815290600101906020018083116118c157829003601f168201915b50505050508060200190518101906118f69190613458565b905061190a8160800151431015601561212d565b60408051338152845160208083019190915285015115158183015290517f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9509181900360600190a161195d3415601261212d565b6000808055600181905561197390600290612a2a565b505050565b611988600460005414601761212d565b81516119a390158061199c57508251600154145b601861212d565b6000808055600280546119b590612f86565b80601f01602080910402602001604051908101604052809291908181526020018280546119e190612f86565b8015611a2e5780601f10611a0357610100808354040283529160200191611a2e565b820191906000526020600020905b815481529060010190602001808311611a1157829003601f168201915b5050505050806020019051810190611a4691906134de565b60408051338152855160208083019190915286015115158183015290519192507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722919081900360600190a161195d3415601661212d565b611aa561285e565b60016000541415611b6057600060028054611abf90612f86565b80601f0160208091040260200160405190810160405280929190818152602001828054611aeb90612f86565b8015611b385780601f10611b0d57610100808354040283529160200191611b38565b820191906000526020600020905b815481529060010190602001808311611b1b57829003601f168201915b5050505050806020019051810190611b509190613458565b9050611b5e6000600761212d565b505b60046000541415611c8d57600060028054611b7a90612f86565b80601f0160208091040260200160405190810160405280929190818152602001828054611ba690612f86565b8015611bf35780601f10611bc857610100808354040283529160200191611bf3565b820191906000526020600020905b815481529060010190602001808311611bd657829003601f168201915b5050505050806020019051810190611c0b91906134de565b9050611c15612a64565b60208083015182516001600160a01b039182169052604080850151845190151593019290925260608085015184519216919092015260808084015183519092019190915260a08084015183519092019190915260c08084015183519092019190915260e0909201518151909201919091525192915050565b60066000541415611dbb57600060028054611ca790612f86565b80601f0160208091040260200160405190810160405280929190818152602001828054611cd390612f86565b8015611d205780601f10611cf557610100808354040283529160200191611d20565b820191906000526020600020905b815481529060010190602001808311611d0357829003601f168201915b5050505050806020019051810190611d3891906132b8565b9050611d42612a64565b60808083015182516001600160a01b03918216905260a080850151845190151560209091015260c0808601518551931660409093019290925260e0850151845160600152610100850151845190930192909252610120840151835190920191909152610140909201518151909201919091525192915050565b611dc76000600761212d565b919050565b611ddc600160005414600f61212d565b8151611df7901580611df057508251600154145b601061212d565b600080805560028054611e0990612f86565b80601f0160208091040260200160405190810160405280929190818152602001828054611e3590612f86565b8015611e825780601f10611e5757610100808354040283529160200191611e82565b820191906000526020600020905b815481529060010190602001808311611e6557829003601f168201915b5050505050806020019051810190611e9a9190613458565b9050611ea4612a77565b611eb582608001514310601161212d565b60408051338152855160208083019190915280870151805183850152908101516060830152820151608082015290517f955174907bb1a212127bbf09e3338775932663cd5b51e4058d5b57da257101ec9181900360a00190a1602084015151611f21901515600961212d565b611f37600085602001516040015111600a61212d565b611f4d600085602001516020015111600b61212d565b611f746000611f6c8660200151600001518760200151602001516125ce565b14600c61212d565b611f8582602001513414600d61212d565b611fa6611f9f33846040015187602001516000015161222c565b600e61212d565b815160208301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611fe3573d6000803e3d6000fd5b506040517fe3186c9b3140de057ac0af103f783a8c4cf8db1215158bfd3a04a74b4a6c582f90600090a18051600090528051336020918201528481018051604090810151845182015284015183516001600160a01b03909116606090910152805151835160800152805151835160a00152510151815160c00152612065612a09565b60408381015182516001600160a01b039091169052825160208084018051929092529051439082015260608086018051845192830190945251515191880151516120fa93926000929182916120b9916122a7565b815260200187606001516000600181106120d5576120d5613442565b602002015160200151815260200187606001516000600181106107a7576107a7613442565b602080830151604001919091528301516121149080612258565b602082015160600152612126816122f4565b5050505050565b816103715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008115806121775750828261216981836135a5565b925061217590836135da565b145b6121b25760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161214a565b92915050565b6121c0612a8a565b60005b600181101561220c578481600181106121de576121de613442565b60200201518282600181106121f5576121f5613442565b602002015280612204816135ee565b9150506121c3565b508181846001811061222057612220613442565b60200201529392505050565b600061223a83853085612615565b90505b9392505050565b61224f8383836126ef565b61197357600080fd5b6000826122658382613609565b91508111156121b25760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161214a565b6000826122b48382613620565b91508110156121b25760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161214a565b6020810151515115612450576040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528151516001600160a01b039081168252602080840180515182015183168285015260016040808601829052825151606090810151909516948601949094528151516080908101519086015281515160c09081015160a08088019190915283515101519086015290515183015160e08501526004600055439055905161242c9183910160006101008201905060018060a01b03808451168352806020850151166020840152604084015115156040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190611973929190612ad5565b612458612b59565b8151516001600160a01b0390811682526020808401805151828501528051604090810151818601528151606090810151818701528251518401518516608080880191909152600060a08089018290528551519093015190961660c0808901919091528451519091015160e088015283515101516101008701528251510151610120860152905151810151610140850152600690925543600155905161242c91839101613676565b50565b604080516001600160a01b0383811660248084019190915283518084039091018152604490920183526020820180516001600160e01b03166370a0823160e01b17905291516000928392839291871691839161255d9161376a565b60006040518083038185875af1925050503d806000811461259a576040519150601f19603f3d011682016040523d82523d6000602084013e61259f565b606091505b50915091506125b0828260066127c0565b50808060200190518101906125c59190613786565b95945050505050565b60008161260b5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b604482015260640161214a565b61223d828461379f565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161267c9161376a565b60006040518083038185875af1925050503d80600081146126b9576040519150601f19603f3d011682016040523d82523d6000602084013e6126be565b606091505b50915091506126cf828260016127c0565b50808060200190518101906126e491906137b3565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161274e9161376a565b60006040518083038185875af1925050503d806000811461278b576040519150601f19603f3d011682016040523d82523d6000602084013e612790565b606091505b50915091506127a1828260026127c0565b50808060200190518101906127b691906137b3565b9695505050505050565b606083156127cf57508161223d565b8251156127df5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161214a565b604051806040016040528060008152602001612815612bdc565b905290565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b6040518060e0016040528060006001600160a01b0316815260200160001515815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b604080516103208101909152600061030082019081528190815260200160008152602001600081526020016128e2612a8a565b81526020016128ef612bef565b81526020016128fc612a8a565b8152602001612909612bef565b81526020016129246040518060200160405280600081525090565b815260200160008152602001612938612bef565b815260408051602080820183526000825283015201612955612bef565b8152602001612962612a8a565b8152602001600081526020016000815260200161297d612a8a565b81526020016129986040518060200160405280600081525090565b81526020016129a5612bef565b81526020016129c06040518060200160405280600081525090565b81526020016129cd612bef565b81526020016129e86040518060200160405280600081525090565b81526020016129f5612a8a565b815260200160008152602001612815612bef565b60408051606081018252600091810191825290815260208101612815612c40565b508054612a3690612f86565b6000825580601f10612a46575050565b601f0160209004906000526020600020908101906124ff9190612c74565b604051806020016040528061281561285e565b6040518060200160405280612815612bef565b60405180602001604052806001905b612abf604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081612a995790505090565b828054612ae190612f86565b90600052602060002090601f016020900481019282612b035760008555612b49565b82601f10612b1c57805160ff1916838001178555612b49565b82800160010185558215612b49579182015b82811115612b49578251825591602001919060010190612b2e565b50612b55929150612c74565b5090565b60405180610160016040528060006001600160a01b03168152602001612b7d612bef565b8152602001612b8a612a8a565b81526020016000815260200160006001600160a01b0316815260200160001515815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280612815612c89565b6040518060e0016040528060001515815260200160006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6040518060800160405280612c53612bef565b815260200160008152602001612c67612a8a565b8152602001600081525090565b5b80821115612b555760008155600101612c75565b6040805161012081019091528060008152602001612cb36040518060200160405280600081525090565b8152602001600015158152602001612cd76040518060200160405280600081525090565b8152604080516020818101909252600081529101908152602001600015158152602001612d106040518060200160405280600081525090565b8152602001612d2b6040518060200160405280600081525090565b81526020016128156040518060200160405280600081525090565b600060208284031215612d5857600080fd5b5035919050565b6001600160a01b03811681146124ff57600080fd5b600060208284031215612d8657600080fd5b813561223d81612d5f565b600060408284031215612da357600080fd5b50919050565b60005b83811015612dc4578181015183820152602001612dac565b838111156118225750506000910152565b8281526040602082015260008251806040840152612dfa816060850160208701612da9565b601f01601f1916919091016060019392505050565b60006101408284031215612da357600080fd5b600060808284031215612da357600080fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715612e8357612e83612e4a565b60405290565b6040805190810167ffffffffffffffff81118282101715612e8357612e83612e4a565b604051610120810167ffffffffffffffff81118282101715612e8357612e83612e4a565b6040516060810167ffffffffffffffff81118282101715612e8357612e83612e4a565b604051610160810167ffffffffffffffff81118282101715612e8357612e83612e4a565b80151581146124ff57600080fd5b8035611dc781612f17565b600060408284031215612f4257600080fd5b6040516040810181811067ffffffffffffffff82111715612f6557612f65612e4a565b604052823581526020830135612f7a81612f17565b60208201529392505050565b600181811c90821680612f9a57607f821691505b60208210811415612da357634e487b7160e01b600052602260045260246000fd5b803560088110611dc757600080fd5b600060208284031215612fdc57600080fd5b612fe4612e60565b9135825250919050565b60006020828403121561300057600080fd5b613008612e60565b9050813561301581612d5f565b815292915050565b600081830361014081121561303157600080fd5b613039612e89565b8335815261012080601f198401121561305157600080fd5b613059612e60565b9250613063612eac565b61306f60208701612fbb565b815261307e8760408801612fca565b602082015261308f60608701612f25565b60408201526130a18760808801612fca565b60608201526130b38760a08801612fee565b60808201526130c460c08701612f25565b60a08201526130d68760e08801612fca565b60c08201526101006130ea88828901612fca565b60e08301526130fb88848901612fca565b9082015283525060208101919091529392505050565b6000818303608081121561312457600080fd5b61312c612e89565b833581526060601f198301121561314257600080fd5b61314a612ed0565b9150602084013582526040840135602083015260608401356040830152816020820152809250505092915050565b8051611dc781612d5f565b8051611dc781612f17565b600060e082840312156131a057600080fd5b60405160e0810181811067ffffffffffffffff821117156131c3576131c3612e4a565b806040525080915082516131d681612f17565b815260208301516131e681612d5f565b602082015260408381015190820152606083015161320381612d5f565b806060830152506080830151608082015260a083015160a082015260c083015160c08201525092915050565b600082601f83011261324057600080fd5b613248612e60565b8060608085018681111561325b57600080fd5b855b818110156132ac578281890312156132755760008081fd5b61327d612ed0565b815181526020808301518183015260408084015161329a81612f17565b9083015290865290940193820161325d565b50919695505050505050565b600061026082840312156132cb57600080fd5b6132d3612ef3565b6132dc83613178565b81526132eb846020850161318e565b60208201526101006132ff8582860161322f565b6040830152610160840151606083015261331c6101808501613178565b608083015261332e6101a08501613183565b60a08301526133406101c08501613178565b60c08301526101e084015160e0830152610200840151908201526102208301516101208201526102409092015161014083015250919050565b6001600160a01b0383168152815160208083019190915282015151805161016083019190600881106133bb57634e487b7160e01b600052602160045260246000fd5b60408401526020810151805160608501525060408101518015156080850152506060810151805160a085015250608081015180516001600160a01b031660c08501525060a081015180151560e08501525060c081015161010061342081860183519052565b60e0830151516101208601529091015151610140909301929092529392505050565b634e487b7160e01b600052603260045260246000fd5b600060e0828403121561346a57600080fd5b60405160a0810181811067ffffffffffffffff8211171561348d5761348d612e4a565b604052825161349b81612d5f565b81526020838101519082015260408301516134b581612d5f565b60408201526134c7846060850161322f565b606082015260c09290920151608083015250919050565b60006101008083850312156134f257600080fd5b6040519081019067ffffffffffffffff8211818310171561351557613515612e4a565b816040528351915061352682612d5f565b81815261353560208501613178565b602082015261354660408501613183565b604082015261355760608501613178565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156135bf576135bf61358f565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826135e9576135e96135c4565b500490565b60006000198214156136025761360261358f565b5060010190565b60008282101561361b5761361b61358f565b500390565b600082198211156136335761363361358f565b500190565b8060005b600181101561182257815180518552602080820151818701526040918201511515918601919091526060909401939091019060010161363c565b81516001600160a01b03168152610260810160208301516136e96020840182805115158252602081015160018060a01b0380821660208501526040830151604085015280606084015116606085015250506080810151608083015260a081015160a083015260c081015160c08301525050565b5060408301516101006136fe81850183613638565b606085015161016085015260808501516001600160a01b0390811661018086015260a086015115156101a086015260c0860151166101c085015260e08501516101e085015284015161020084015250610120830151610220830152610140909201516102409091015290565b6000825161377c818460208701612da9565b9190910192915050565b60006020828403121561379857600080fd5b5051919050565b6000826137ae576137ae6135c4565b500690565b6000602082840312156137c557600080fd5b815161223d81612f1756fea2646970667358221220955086a36a3afeecd051f44716b5d028491653980b0b5484da8aa7c6c4cc752d64736f6c634300080c0033`,
  BytecodeLen: 16017,
  Which: `oD`,
  version: 7,
  views: {
    state: `state`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:35:11:after expr stmt semicolon',
    fs: ['at ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:98:45:application call to "construct" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:28:40:function exp)', 'at ./index.rsh:13:21:application call to "useConstructor" (defined at: ./.reach/rev/@github.com:nash-protocol:starter-kit:543af82ddab2dcef581e1adb0883cb00a6d2c0aa/util.rsh:91:3:function exp)'],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './interface.rsh:126:15:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './interface.rsh:302:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './interface.rsh:304:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './interface.rsh:142:29:after expr stmt semicolon',
    fs: ['at ./index.rsh:13:6:application call to "App" (defined at: ./interface.rsh:100:26:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Constructor": Constructor,
  "Manager": Manager,
  "Relay": Relay,
  "Verifier": Verifier,
  "buy": buy,
  "close": close,
  "deposit": deposit,
  "grant": grant,
  "touch": touch,
  "updatePrice": updatePrice,
  "updateTokenUnit": updateTokenUnit,
  "withdraw": withdraw
  };
export const _APIs = {
  buy: buy,
  close: close,
  deposit: deposit,
  grant: grant,
  touch: touch,
  updatePrice: updatePrice,
  updateTokenUnit: updateTokenUnit,
  withdraw: withdraw
  };