

class TodoUtils {
  // 一年有效期
    public storeAge:number = 366*24*60*60*1000;

    type(o:any):string {
      var s = Object.prototype.toString.call(o);
      return s.match(/\[object (.*?)\]/)[1].toLowerCase();
    }
    setStoreItem(key:string, value:any) {
      localStorage.removeItem(key);
      var isObject:boolean = this.type(value) == 'object';
      const _time = new Date().getTime();
      const _age = this.storeAge;
      // 如果不是对象，新建一个对象把 value 存起来
      if(!isObject) {
          var b:any = value;
          value = {};
          value._value = b;
      }
      // 加入时间
      value._time = _time;
      // 过期时间
      value._age = _time + _age;
      // 是否一个对象
      value._isObject = isObject;
      localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * 判断一个 localStorage 是否过期
     * @param key
     * @returns {boolean}
     */
    isExpire(key:string):boolean {
        var isExpire:boolean = true;
        let value:any = localStorage.getItem(key)
        const now = new Date().getTime();

        if(value) {
            value = JSON.parse(value);
            // 当前时间是否大于过期时间
            isExpire = now > value._age;
        } else {
            // 没有值也是过期
        }
        return isExpire;
    }
    getStoreItem(key:string) {
      var isExpire:boolean = this.isExpire(key);
      let value:any = null;
      if(!isExpire) {
          value = localStorage.getItem(key);
          value = JSON.parse(value);
          if(!value._isObject) {
              value = value._value;
          }
      }
      return value;
    }
    removeStoreItem(key:string) {
      localStorage.removeItem(key)
    }
    clearStore() {
      localStorage.clear()
    }
}

export const todoUtils:TodoUtils = new TodoUtils();