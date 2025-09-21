import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView, Image, Dimensions } from "react-native";
import styles from "./styles";
import images from "./images";

const { width: screenWidth } = Dimensions.get("window");

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollRef = useRef(null);
  const autoIndexRef = useRef(1);

  const loopImages = [images[images.length - 1], ...images, images[0]];

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setCurrentIndex(index);
    autoIndexRef.current = index;
    if (index === loopImages.length - 1) {
      setTimeout(() => {
        scrollRef.current.scrollTo({ x: screenWidth, animated: false });
        setCurrentIndex(1);
        autoIndexRef.current = 1;
      }, 10);
    } else if (index === 0) {
      setTimeout(() => {
        scrollRef.current.scrollTo({
          x: screenWidth * images.length,
          animated: false,
        });
        setCurrentIndex(images.length);
        autoIndexRef.current = images.length;
      }, 10);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: screenWidth, animated: false });
    }
    const interval = setInterval(() => {
      let nextIndex = autoIndexRef.current + 1;
      scrollRef.current.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.carousel}
      >
        {loopImages.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ImageCarousel;
