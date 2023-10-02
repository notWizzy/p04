module.exports = {
  entry: './p4.jsx',
  output: {
    path: path.resolve(__dirname, 'compiled'),
    filename: 'p4.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ],
  },
  entry: {
    gettingStarted: "./gettingStarted.jsx",
    p2: "./p2.jsx",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: `${__dirname}/compiled`,
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  mode: "development",
};
