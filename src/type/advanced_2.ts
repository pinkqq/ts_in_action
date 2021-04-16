enum Type {
  Strong,
  Week,
}

class Java {
  helloJava() {
    console.log("hello java");
  }
}

class JavaScript {
  helloJavaScript() {
    console.log("hello javascript");
  }
}

function isJava(lang: Java | JavaScript): lang is Java {
  // 类型谓词
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();

  // instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }

  // in
  // if ("helloJava" in lang) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }

  // typeof
  // console.log(typeof lang);

  // 保护函数
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  return lang;
}

getLanguage(Type.Strong);
getLanguage(Type.Week);

function doSome(x: number | string) {
  if (typeof x === "string") {
    x.length;
  } else {
    x++;
  }
  return x;
}
