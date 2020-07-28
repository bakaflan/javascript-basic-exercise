export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  promises.forEach((p) => {
    if (!(p instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  });
  let array_fullfilled = [];
  let array_promise = [];
  let i = 0;
  for (let p of promises) {
    let index = i;
    array_fullfilled.push(true);//true表示的是当前promise默认为执行成功的
    //向数组中加入一个新创建的promise，该promise在失败的时候依然会返回ture，这样就不会使promise.all()在有reject情况下终止，会把所有的promise执行完毕
    array_promise.push(new Promise(resolve => resolve(p)).catch((_err) => { array_fullfilled[index] = false; return true; }));
    i += 1;
  }
  return Promise.all(array_promise).then((values) => {
    const index_reject = array_fullfilled.indexOf(false);//查找是否有reject的promise
    if (index_reject >= 0) {//如果有就抛出
      throw values[index_reject];
    } else {
      return values;
    }
  });
  // return Promise.all(promises).catch(result => console.log(result));
}
