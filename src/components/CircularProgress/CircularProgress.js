import React from 'react';
import {View, Image} from 'react-native';
import {Svg, Circle, Text as SVGText} from 'react-native-svg';

const CircularProgress = (props) => {
  const {size, strokeWidth, text} = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = props.totalProgress - props.progressPercent;

  return (
    <View style={{margin: 10}}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={props.bgColor ? props.bgColor : '#f2f2f2'}
          opacity={props.opacity?props.opacity:0}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />

        {/* Progress Circle */}
        <Circle
          stroke={props.pgColor ? props.pgColor : '#3b5998'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={
            radius * Math.PI * 2 * (svgProgress / props.totalProgress)
          }
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{strokeWidth}}
        />

        {/* Text */}
        <SVGText
          fontSize={props.textSize ? props.textSize : '10'}
          x={size / 2}
          y={size / 2 + (props.textSize ? props.textSize / 2 - 1 : 5)}
          textAnchor="middle"
          fontWeight={props.fontWeight?props.fontWeight:'bold'}
          fill={props.textColor ? props.textColor : '#333333'}>
          {`${text}`}
        </SVGText>
      </Svg>
    </View>
  );
};

export default CircularProgress;
