const sliderImages = document.querySelectorAll('.slide-in');

// Prevents checlSlide function form running all the time
function deBounce(func, wait= 20, immediate = true) {
  let timeOut;
  return function() {
    let context = this, args = arguments;
      let later = function() {
        timeOut = null;
        if(!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if(callNow) func.apply(context, args);
  };
};

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    //  Image will slide in half through image view
    const slideInAt = (window.scrollY + window.innerHeight  ) - sliderImage.height / 2;
    // Image will slide in if scroll back up
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scollY - imageBottom; // Flag to make sure image is not shown past the view port
    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.add('active');
  }
  });
}

window.addEventListener('scroll', deBounce(checkSlide));