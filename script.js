// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // 防止表单提交
//   alert('消息已发送！感谢你的联系。');
// });


// script.js
particlesJS("particles-js", {
  particles: {
      number: {
          value: 80, // 粒子的数量
          density: {
              enable: true,
              value_area: 800 // 粒子密度
          }
      },
      color: {
          value: "#ffffff" // 粒子的颜色
      },
      shape: {
          type: "circle", // 粒子的形状
          stroke: {
              width: 0,
              color: "#000000"
          },
          polygon: {
              nb_sides: 5 // 多边形的边数
          },
          image: {
              src: "img/github.svg", // 如果需要图片粒子
              width: 100,
              height: 100
          }
      },
      opacity: {
          value: 0.5, // 粒子的透明度
          random: false,
          anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
          }
      },
      size: {
          value: 5, // 粒子的大小
          random: true,
          anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
          }
      },
      line_linked: {
          enable: true,
          distance: 150, // 连接粒子的距离
          color: "#ffffff", // 连接线的颜色
          opacity: 0.4,
          width: 1
      },
      move: {
          enable: true,
          speed: 3, // 粒子移动速度
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
          }
      }
  },
  interactivity: {
      detect_on: "canvas",
      events: {
          onhover: {
              enable: true,
              mode: "repulse" // 鼠标悬停时的效果
          },
          onclick: {
              enable: true,
              mode: "push" // 鼠标点击时的效果
          },
          resize: true
      },
      modes: {
          grab: {
              distance: 400,
              line_linked: {
                  opacity: 1
              }
          },
          bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
          },
          repulse: {
              distance: 200,
              duration: 0.4
          },
          push: {
              particles_nb: 4
          },
          remove: {
              particles_nb: 2
          }
      }
  },
  retina_detect: true // 高分辨率支持
});
