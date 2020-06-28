front-env-setting-webpack  

https://www.udemy.com/course/front-env-setting-webpack/

レクチャー16に入る前にすでにHTMLとCSSのminifyが行われていたのでレクチャー16はスキップ。  
production modeではhtml-loaderとwebpack-html-pluginがそれぞれHTMLをminifyしてるようだった。  
CSSは明示的にminifyしているわけではなさそうだったものの、sass-loaderが後続のプラグインにデータを渡す際に1列にしているせいか、
結果的にminifyされているようだった。とりあえず不要そうなので一旦スキップ
