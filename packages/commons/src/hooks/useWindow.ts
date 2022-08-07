/**
 * Hook to get the window dimension
 *
 * @returns {{height: number; width: number}} window dimensions
 */
const useWindow = () => {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  };
};

export default useWindow;
