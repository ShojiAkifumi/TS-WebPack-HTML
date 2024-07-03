module.exports = {
  entry: {
    //バンドルをするファイル
    bundle: "./src/index.ts",
  },
  output: {
    //バンドルの出力先のファイル
    //distとはdistributionの略
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  mode: "production",
  // mode: "development",
  resolve: {
    //ファイル名の拡張子を省いても認識してくれる
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      //ローカルサーバーを立ち上げた時出力するファイル
      directory: `${__dirname}/dist`,
    },
    //trueで自動的にブラウザが立ち上げられる
    open: true,
  },
  module: {
    rules: [
      {
        //拡張子が.tsのファイルをコンパイルする設定
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};
