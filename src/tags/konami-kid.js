import tag from '../tag.bundle.js'
import start from '../games/qftgu.js'

let onKonami = defaultHack

export default function handleKonami(callback) {
  onKonami = callback
}

let konamiCombo
const reset = () => konamiCombo = 0
const proceed = () => konamiCombo += 1
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

reset()
const konamiSuccess = () => konamiCombo === konamiCode.length

function konamiListener({ keyCode }) {
  keyCode === konamiCode[konamiCombo]
    ? proceed()
    : reset()

  if(konamiSuccess()) {
    onKonami()
    reset()
  }
}

document.addEventListener('keydown', konamiListener)

const { html, css, set } = tag('konami-kid')

function defaultHack() {
  document.body.innerHTML = '<konami-kid></konami-kid>'
  set({ boop: true })
  handleKonami(start)
}

html(target => {
  return `
    <section class="layout">
      <div class="horizon"></div>
      <div class="land">
        <div class="grid-3d"></div>
      </div>
    </section>

    <section class="skybox">
      <div class="a"></div>
      <div class="b"></div>
      <div class="c"></div>
      <div class="d"></div>
      <div class="f">
<svg id="surfer-avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 317.296 305.523">
<g style="transform: translateY(5px)">
    <g id="keyboard">

    <path style="display:inline;opacity:1;fill:purple;stroke:#f0f;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M171.04 333.789s-23.713 47.426-24.264 54.044c-.551 6.618 91.544 18.75 93.75 17.096 2.206-1.655-9.375-67.28-9.375-67.28s-45.22-7.169-60.11-3.86z" transform="translate(-61.285 -131.304)"/>

    <path style="display:inline;opacity:1;fill:purple;stroke:#f0f;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m241.077 405.48 2.758 8.272s-88.235-3.86-90.993-7.72c-2.757-3.86-9.375-17.647-4.963-17.647s93.198 17.095 93.198 17.095z" transform="translate(-61.285 -131.304)"/>

    <path style="fill:purple;stroke:#f0f;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m155.005 385.756 7.311 1.755 1.755-5.265-7.117-2.144zM159.099 374.837l6.824 1.755 1.657-4.777-6.336-1.657z" transform="translate(-61.285 -131.304)"/>

    <path style="fill:purple;stroke:#f0f;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m161.146 369.086 6.434 2.73 1.365-4.095-6.531-1.755zM169.92 363.431l-5.557-1.657-1.462 3.217 6.044 1.56z" transform="translate(-61.285 -131.304)"/>

    <path style="opacity:1;fill:purple;stroke:#f0f" d="m171.724 359.678-5.167-1.51-1.852 3.07 6.044 1.56zM172.065 358.947l1.51-3.997-5.068-1.121-1.609 3.168zM171.577 383.173l7.556 1.852-.975 5.264-7.75-1.56zM172.162 382.198l7.946 1.706 1.12-4.436-7.603-1.462zM173.722 376.933l.975-3.363 7.701 1.657-1.17 3.022zM174.892 372.644l1.219-3.315 6.775 1.804-.634 3.12zM177.134 365.43l7.02 1.706-.976 3.168-7.067-1.9zM177.573 364.601l.828-3.217 7.166 1.706-1.365 3.266zM179.864 357.436l6.483 1.365-.829 3.412-7.117-.829zM182.447 384.879l8.19 1.657-.635 5.947-8.091-1.268zM182.593 383.611l8.14 2.096.78-4.29-7.457-1.9zM184.348 378.64l.634-3.315 7.409 1.95-.536 3.558zM185.08 374.399l.487-2.389 7.604 2.048-.78 2.193zM185.908 371.28l1.024-3.56 6.58 1.463-.39 3.656zM188.101 363.626l7.02 1.706-1.073 3.315-6.824-1.609zM188.638 362.749l.682-3.51 6.775 1.365-.633 3.754zM189.661 358.41l.293-4.045 7.019 1.072-.536 4.144zM196.73 354.365l1.461-4.533-6.434-.682-1.608 4.289zM191.708 393.019l10.285 2.388.683-6.093-9.846-2.242zM203.846 389.46l9.992 1.56-.682 6.483-9.652-1.218zM215.983 391.069l7.604.39-.341 6.824-7.8-.244zM224.757 399.16l8.822 1.268-1.755-12.966-7.506-.341zM223.197 389.607l.097-3.705-6.141-.292-1.17 4.484zM214.082 389.607l-10.236-1.268 1.364-5.069 9.505 1.072zM202.676 388.388l-10.431-2.29.975-4.875 10.528 1.803zM193.415 380.102l.536-2.876 10.333 1.657-.39 3.266zM204.918 382.295l1.024-4.24 9.31 1.023-.098 4.29zM216.275 384.05l7.263 1.024-.39-5.07-6.58-.536zM224.708 385.805l6.678.536-.926-6.386-6.093.098zM198.24 357.728l6.97.927.147-5.46-6.434-.34zM199.312 351.782l6.386.682.487-3.704-6.141-.244zM187.127 357.923l.974-4.679-6.044-.829-1.852 3.851zM197.363 362.31l7.409 1.073.048-4.095-7.067-.633zM195.56 369.183l8.627 1.024.682-5.752-7.847-1.024zM195.023 370.5l-.877 5.556 10.528 1.609v-6.045zM206.137 376.543l9.456 1.219-.098-5.654-9.65-.731zM223.49 378.688l-6.532-.731-.098-5.947 6.776.439zM224.464 378.932l-.341-6.483 6.093-.195.244 6.434zM205.893 370.207l.341-5.947 8.969.682.049 5.752zM216.47 370.987l6.97.438-.584-6.434-6.386-.195zM224.415 371.718l6.045-.195-.683-6.97-5.8-.195zM205.942 362.993l9.212.828.098-4.582-9.067-.146zM216.08 363.675l6.824.634-.438-5.752-6.142-.146zM223.928 363.626l6.19.244-.877-6.337h-6.044zM206.673 357.728l.097-4.387 8.14.05.195 4.922zM215.983 357.338l-.049-4.533 6.385.244v4.923zM206.673 352.172l.292-4.923 7.555.097.293 5.07zM223.392 356.851l-.439-4.533 6.044.39.39 3.802zM222.027 352.318l-.634-6.093-6.239-.146.341 5.849zM174.405 353.049l2.047-4.143-6.386-1.024-1.56 4.63zM182.203 351.392l1.853-4.68 6.141 1.511-1.316 4.046zM176.988 347.249l-6.19-1.512 1.51-4.143 6.873 1.073zM172.698 340.278l7.458 1.414 1.706-6.58-7.165-.44zM184.3 345.299l6.19 2.047.926-5.167-6.24-1.51zM191.416 347.687l7.165 1.024.78-6.386-6.678-.73zM199.654 347.541l6.629.487.244-5.703-6.386-.828zM207.501 346.176l7.02.634-.244-6.824-6.727-.293zM223.002 351.294l6.531.488-1.413-7.507-6.24-.146zM221.247 345.494l-.634-6.824-5.946-.488.438 6.922z" transform="translate(-61.285 -131.304)"/>

    </g>

    <g id="shoes">

    <path style="opacity:1;fill:#fff;stroke:#1a1a1a" d="M228.022 383.611s-7.799 6.337-21.35 5.85c-13.55-.488-22.129-5.46-22.811-7.41-.683-1.95 4.582-8.676 13.94-14.72 9.36-6.044 11.406-11.211 12.576-14.038s3.217-5.265 5.752-4.972c2.535.292 15.305 0 17.548 2.73 2.242 2.73 3.607 7.214 2.924 14.233-.682 7.019 4.095 7.896-8.579 18.327zM181.131 353.098s10.041-4.68 14.623-5.557c4.582-.877 13.063.341 15.793-3.607 2.73-3.948 2.925-25.25 2.145-26.03-.78-.779-13.843-3.509-18.523-.779s-9.456 11.114-15.5 15.5c-6.044 4.387-15.696 11.796-12.868 16.476 2.827 4.68 13.404 4.68 14.33 3.997z" transform="translate(-61.285 -131.304)"/>

    </g>

    <g id="pants">

    <path style="opacity:1;fill:#06f;stroke:#1a1a1a" d="M204.43 318.002s-11.015 2.243-13.16-.585c-2.145-2.827-22.325-30.805-25.542-37.045-3.217-6.239-3.607-19.205 8.579-25.151 12.186-5.947 55.958-19.4 55.958-19.4l34.218.39-15.208 31.878s-29.636 9.944-36.168 10.821c-6.532.877-14.72 1.755-14.72 1.755s22.616 19.205 23.201 22.227c.585 3.022.585 9.164-3.217 10.821s-13.94 4.29-13.94 4.29z" transform="translate(-61.285 -131.304)"/>

    <path style="opacity:1;fill:#06f;stroke:#1a1a1a" d="m214.719 354.252-4.972-3.022s-2.924-63.27-2.145-73.798c.78-10.529 3.997-17.938 25.542-27.296 21.545-9.36 21.057-8.774 21.057-8.774s15.5-7.702 18.133-11.601c2.632-3.9 18.62-9.164 20.375-8.58 1.755.586 2.144 11.7 3.704 14.04 1.56 2.339 6.044 8.578 3.802 16.182-2.242 7.604-3.607 16.378-16.573 22.714-12.965 6.337-40.944 13.746-40.944 13.746s1.56 53.13.292 56.348c-1.267 3.217-1.754 4.192-7.799 7.701-6.044 3.51-20.472 2.34-20.472 2.34z" transform="translate(-61.285 -131.304)"/>

    </g>

    <g id="shirt">

    <path style="opacity:1;fill:#d40000;stroke:#1a1a1a" d="M170.261 224.96s20.543 18.889 23.99 20.405c3.446 1.517 11.167 7.307 19.715 7.307 8.547 0 17.233-6.204 26.47-8.134 9.237-1.93 26.884-5.101 35.984-3.584 9.099 1.516 21.231 10.202 23.437 8.685 2.206-1.516-1.379-9.375-2.895-14.752-1.517-5.376-3.309-12.546-3.309-12.546s52.803-4.825 55.699-8.272c2.895-3.446 1.93-12.546 4.273-14.476 2.344-1.93 7.445-4.274 7.445-4.274s-46.737-12.408-61.35-12.821c-14.615-.414-28.677.965-40.12-1.241-11.443-2.206-53.217-11.719-63.144-9.513-9.926 2.206-19.439 15.028-35.707 18.888-16.269 3.86-36.26 7.858-44.67 7.583-8.41-.276-27.16 5.928-27.71 9.512-.552 3.585-1.517 11.581-.552 12.408.965.828 11.856 7.445 18.474 8.135 6.618.689 55.01 1.24 63.97-3.31z" transform="translate(-61.285 -131.304)"/>

    </g>

    <g id="cable">

    <path style="opacity:1;fill:none;stroke:#f0f" d="M155.101 403.676s-1.103 10.34-8.272 15.166c-7.17 4.825-8.272 10.202-16.544 5.928s-12.132-19.715-2.62-42.739c9.513-23.024 36.398-53.355 45.91-63.005 9.513-9.651 73.897-48.668 99.954-61.627 26.057-12.96 70.864-31.848 80.102-42.877" transform="translate(-61.285 -131.304)"/>

    </g>

    <g id="mouse">

    <path style="opacity:1;fill:purple;stroke:#f0f" d="M353.63 214.522s-1.93-2.206.414-5.79c2.344-3.585 7.17-10.203 11.443-10.892 4.274-.69 9.1 2.757 10.202 6.342 1.103 3.585-2.343 9.926-7.582 11.167-5.24 1.241-7.445 3.31-14.476-.827z" transform="translate(-61.285 -131.304)"/>

    </g>

    <g id="hands">
    <path style="opacity:1;fill:#ffd42a;stroke:#540" d="M353.906 209.972s.414-6.341 3.447-4.687 7.17 6.342 7.17 7.169.275 5.101 0 5.653c-.277.551 2.205 1.654 2.894.275.69-1.378 1.655-2.895 1.655-2.895s0 1.517.827 1.24c.827-.275 3.033-3.721 3.033-3.721l-.69-1.93s.69.827 1.517.827 2.068-3.31 2.068-3.31l2.206-2.205s-1.654-7.445-5.377-8.548c-3.722-1.103-9.65-3.17-13.51-1.379-3.861 1.793-6.343 6.618-7.308 9.513-.965 2.895-.69 8.548.552 9.927 1.24 1.378 2.757 4.825 4.411 4.963 1.655.138 6.756-.276 6.342-1.517-.413-1.24-4.55-1.93-5.928-3.584-1.379-1.655-4.136-2.068-3.309-5.79zM87.684 218.658l1.379-11.443s0 2.206-3.585-.276c-3.585-2.481-12.408-10.753-14.476-11.167-2.068-.414-5.377-.138-5.377-.138l12.96 8.272-12.96-8.685s-4.825-1.655-3.585.827c1.241 2.481 13.236 9.65 13.236 9.65s-9.651-7.306-11.168-5.928c-1.516 1.379-3.722-.69-1.102 2.758 2.619 3.446 9.926 10.891 14.89 13.235 4.962 2.344 9.788 2.895 9.788 2.895z" transform="translate(-61.285 -131.304)"/>
    </g>

    <g id="hatlid">
    <path style="opacity:1;fill:#250;stroke:#250" d="M147.303 190.002s8.969 1.95 12.186-.878c3.217-2.827 11.698-16.475 11.698-16.475l-8.383-5.752-5.947 9.067-5.85 6.141s-3.801 6.24-3.704 7.897z" transform="translate(-61.285 -131.304)"/>
    </g>
    <g id="ears">

    <path style="opacity:1;fill:#ffd42a;stroke:#540" d="M168.75 174.209s-2.827-6.337-4.777-5.167c-1.95 1.17-3.704 4.874-2.73 8.091.976 3.218 1.756 9.457 3.413 9.262 1.657-.195 3.704-4.485 3.704-6.142s0-4.777.39-6.044zM207.648 178.01s2.827-5.653 3.022-6.433c.195-.78 1.657-4.485 3.12-3.51 1.462.975 3.996 5.557 2.047 8.677-1.95 3.12-3.315 7.798-4.29 8.091-.975.292-3.997-1.17-3.802-3.12.195-1.95-.097-3.704-.097-3.704z" transform="translate(-61.285 -131.304)"/>

    </g>

    <g id="head">

    <path style="opacity:1;fill:#ffd42a;stroke:#540" d="M184.348 210.084c-6.239-2.827-11.698-9.164-15.305-17.45-3.607-8.286-6.044-38.897-4.777-42.504 1.267-3.607 10.333-13.649 17.645-14.819 7.312-1.17 18.133.39 26.127 8.19 7.994 7.798 1.462 44.259.682 45.818-.78 1.56-8.384 22.422-24.372 20.765z" transform="translate(-61.285 -131.304)"/>

    </g>

    <g id="hat">

    <path style="opacity:1;fill:green;stroke:#250" d="M148.278 188.832s.877-3.997 4.192-7.312c3.314-3.314 10.431-11.99 13.258-15.11 2.827-3.12 4.192-9.651 12.673-12.089 8.482-2.437 9.164-2.827 13.161-2.827s19.79 2.73 19.79 2.73-3.217-18.035-12.283-20.96c-9.067-2.924-20.57-1.072-26.224 2.535-5.655 3.607-13.064 15.5-12.771 18.328.292 2.827.682 9.65-.195 11.6-.877 1.95-1.852 8.677-3.705 10.042-1.852 1.364-7.506 6.921-8.286 9.26-.78 2.34-2.632 7.702.39 3.803z" transform="translate(-61.285 -131.304)"/>

    </g>
    </g>

    <style>
    #head,
    #hat,
    #hatlid,
    #ears {
      animation: bob-head 3000ms ease-in-out infinite;
    }

    #hands,
    #shirt,
    #mouse,
    #cable,
    #pants,
    #shoes,
    #keyboard {
      animation: bob-body 3000ms ease-in-out infinite;
    }
    @keyframes bob-head {
      0% {
        transform: translateY(-5px)
      }

      50% {
        transform: translateY(5px)
      }

      100% {
        transform: translateY(-5px)
      }
    }
    @keyframes bob-body {
      0% {
        transform: translateY(-2px)
      }

      50% {
        transform: translateY(2px)
      }

      100% {
        transform: translateY(-2px)
      }
    }
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
main{
  padding: 0;
  margin: 0;
  max-width: initial;
  width: auto;
  min-width: auto;
  height: 100%;
  overflow: hidden;
}

 .layout {
   display: grid;
   grid-template-columns: repeat(48, 1fr);
   grid-template-rows: repeat(48, 1fr);
   height: 100vh;
   width: 100vw;
   position: absolute;
   top: 0;
   left: 0;
 }

 .horizon {
   grid-area: 1 / 1 / -1 / -1;
   background: 
     radial-gradient(
     hsla(330, 75%, 22%, .5) 0%,
     hsla(180, 0%, 0%, .5) 70%
     ),
   linear-gradient(
     violet 0%,
     indigo 100%
     );
 }

 .land {
   grid-area: 32 / 1 / -1 / -1;
   background: 
     radial-gradient(
     hsla(330, 75%, 22%, .5) 0%,
     hsla(180, 0%, 0%, 0) 100%
     ),
   linear-gradient(
     violet 0%,
     magenta 10%,
     crimson 25%,
     orangered 100%
     );
   overflow: hidden;
   perspective: 1000px;
 }

 .grid-3d {
   grid-area: 32 / 1 / -1 / -1;
   background:
     linear-gradient(
     transparent 0%,
     magenta 3%,
     transparent 6%
     ),
   linear-gradient(90deg,
     transparent 0%,
     magenta 3%,
     transparent 6%
     );
   background-size: 100px 100px;
   transform: rotateX(70deg);
   transform-origin: top;
   width: 100vw;
   height: 100vh;
   animation: background3d-walk 5000ms infinite linear;
 }

 @keyframes background3d-walk {
   0% {
     background-position-y: 0px;
   }
   100% {
     background-position-y: 100px;
   }
 }
 #surfer-avatar {
   border: none;
   width: 100vw;
   height: 100vh;
   animation: fade-in 1000ms 4000ms ease-in forwards, fly-in 5000ms 4000ms ease-out forwards;
   padding: 3rem;
   transform: scale(.1);
   opacity: 0;
 }

 @keyframes fade-in {
   0% {
     opacity: 0;
   }
   100% {
     opacity: 1
   }

 }

 @keyframes fly-in {
   0% {
     transform: scale(.1) translateY(50vh)
   }
   100% {
     transform: scale(1) translateY(0)
   }
 }

 .button {
   border: 1rem cyan dashed;
   border-radius: 4rem;
   font-size: 4rem;
   padding: 2rem;
   text-shadow: -6px -6px white, -4px -4px indigo;
   transition: text-shadow 100ms ease-in-out;
   margin: 2rem;
 }
 .button:active {
   text-shadow: -3px -3px white, -2px -2px indigo;
 }


 .skybox {
   display: grid;
   grid-area: letterbox;
   grid-template-areas: 'skybox';
   height: 100%;
   perspective-origin: center;
   perspective: 1000px;
   position: relative;
   overflow: hidden;
   transform-style: preserve-3d;
   width: 100%;
   z-index: 100;
 }

 .a, .b, .c, .d, .e, .f {
   grid-area: skybox;
   opacity: 1;
   transform: translate(0, 0) rotateX(0) rotateY(0) scale(1);
 }

 .a {
   animation: a-quad-to-cube ease-in-out 5000ms alternate infinite;
   background: lightgray;
   transform-origin: top;
 }

 .b {
   animation: b-quad-to-cube ease-in-out 5000ms alternate infinite;
   background: slategrey;
   transform-origin: right;
 }

 .c {
   animation: c-quad-to-cube ease-in-out 5000ms alternate infinite;
   background: lightslategrey;
   transform-origin: bottom;
 }

 .d {
   animation: d-quad-to-cube ease-in-out 5000ms alternate infinite;
   background: grey;
   transform-origin: left;
 }

 .e {
   animation: e-scale-up-in ease-in-out 5000ms alternate infinite;
   background: dimgrey;
   opacity: 0;
 }

 .f {
 }

 @keyframes a-quad-to-cube {
   0% {
     transform: rotateX(0deg) translate(50%, -50%);
   }

   100% {
     transform: rotateX(-110deg) translate(0, 0);
   }
 }
 @keyframes b-quad-to-cube {
   0% {
     transform: rotateY(0deg) translate(50%, 50%);
   }

   100% {
     transform: rotateY(-110deg) translate(0, 0);
   }
 }
 @keyframes c-quad-to-cube {
   0% {
     transform: rotateX(0deg) translate(-50%, 50%);
   }

   100% {
     transform: rotateX(110deg) translate(0, 0);
   }
 }
 @keyframes d-quad-to-cube {
   0% {
     transform: rotateY(0deg) translate(-50%, -50%);
   }

   100% {
     transform: rotateY(110deg) translate(0, 0);
   }
 }
 @keyframes e-scale-up-in {
   0% {
     opacity: 0;
     transform: translateZ(-100vmin) scale(.1);
   }

   100% {
     opacity: 1;
     transform: translateZ(-50vmin) scale(1);
   }
 }


  & .window {
    transition: width 250ms ease-in-out;
    transform: translate(var(--x), var(--y));
    z-index: var(--z);
  }

  & .maximized {
    animation: &-cooldown 100ms;
    transform: translate(0, 0) !important;
    position: fixed;
    inset: 0;
    width: 100% !important;
    height: 100%;
  }

  & .title-bar {
    cursor: grab;
  }

  & .title-bar-text {
    pointer-events: none;
    user-select: none;
  }

  & .grabbing {
    cursor: grabbing;
  }

    </style>
</svg>

      </div>
    </section>
  `
})
