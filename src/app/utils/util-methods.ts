export class UtilMethods {

  loadingScreen(status) {

    const containerElement = document.querySelector('body');

    if (status === 'show') {

      if (containerElement.getAttribute('loading-screen') === 'true') {
        return;
      }

      // create loading element
      const loadingDiv = document.createElement('div');
      loadingDiv.classList.add('loading-screen');

      containerElement.setAttribute('loading-screen', 'true');
      containerElement.appendChild(loadingDiv);
      loadingDiv.classList.add('show');

    } else if (status === 'hide') {

      let activeloadingDiv = document.querySelector('.loading-screen');

      if (activeloadingDiv) {
        activeloadingDiv.classList.remove('show');
        containerElement.setAttribute('loading-screen', 'false');
        setTimeout(() => {
          activeloadingDiv = document.querySelector('.loading-screen');
          if (activeloadingDiv) {
            activeloadingDiv.remove();
          }
        }, 300);
      }
    }
  }

}
