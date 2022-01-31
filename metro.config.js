const { getDefaultConfig } = require("metro-config")

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()

  // here I extend the extensions needed for RN because I use JSX.
  // you don't need this if you use pure JS files
  const updatedSourceExts = [...sourceExts, "jsx", "js", "json", "ts", "tsx"]

  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...updatedSourceExts, "svg"],
    },
  }
})()

// const { getDefaultConfig, mergeConfig } = require("metro-config");

// const svgConfig = (async () => {
//     const {
//         resolver: { sourceExts, assetExts }
//     } = await getDefaultConfig();
//     return {
//         transformer: {
//             babelTransformerPath: require.resolve("react-native-svg-transformer")
//         },
//         resolver: {
//             assetExts: assetExts.filter(ext => ext !== "svg"),
//             sourceExts: [...sourceExts, "svg"]
//         }
//     };
// })();

// const defaultConfig = {
//     transformer: {
//         getTransformOptions: async () => ({
//             transform: {
//                 experimentalImportSupport: false,
//                 inlineRequires: false,
//             },
//         }),
//     },
// };

// module.exports = mergeConfig(svgConfig, defaultConfig);


// const { getDefaultConfig } = require("expo/metro-config");

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts }
//   } = await getDefaultConfig(__dirname);
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-svg-transformer")
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== "svg"),
//       sourceExts: [...sourceExts, "svg"]
//     }
//   };
// })();