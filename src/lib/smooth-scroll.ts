export function smoothScrollToTop(duration = 800) {
  const startPosition = window.scrollY;
  const startTime = performance.now();

  const easeInCubic = (t: number) => t * t * t;

  const animateScroll = (currentTime: number) => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInCubic(progress);

    window.scrollTo(0, startPosition * (1 - easeProgress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
}
