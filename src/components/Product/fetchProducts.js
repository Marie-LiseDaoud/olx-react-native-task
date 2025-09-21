import featuredProducts from '../../data/featuredProducts';
import latestProducts from '../../data/latestProducts';
export function fetchFeaturedProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(featuredProducts);
    }, 1500); 
  });
}
export function fetchLatestProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(latestProducts);
    }, 1500); 
  });
}
