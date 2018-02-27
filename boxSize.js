import { Text, View, Dimensions,StyleSheet } from 'react-native';
export const _boxSizeCaculator = (boxHeight, boxWidth, exportTextSizeOnly=false) => {
    if(boxHeight !== null && boxWidth !== null){
      let baseWidth = Dimensions.get('window').width,
      baseHeight = Dimensions.get('window').height,
      ratio = (baseHeight / baseWidth),
      heightWithAspectRatio = boxHeight * ratio,
      widthWithAspectRatio = boxWidth * ratio,
      fontSizeWithAspectRatio = (ratio * 16);
    return !exportTextSizeOnly ?
      {...{height: heightWithAspectRatio, width: widthWithAspectRatio}}:
      {...{fontSize: fontSizeWithAspectRatio}};
    }
    return;
}