document.addEventListener("DOMContentLoaded", function() {
  // 初始化 SweetScroll
  new SweetScroll({});

  // 初始化 Particles.js
  particlesJS("particles-js", {
      particles: {
          number: {
              value: 30, // 粒子的数量
              density: {
                  enable: true, // 启用密度计算
                  value_area: 800 // 粒子密度区域的大小
              }
          },
          color: {
              value: "#ffffff" // 粒子的颜色为白色
          },
          shape: {
              type: "polygon", // 粒子的形状为多边形
              stroke: {
                  width: 0,
                  color: "#000000" // 边框颜色
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
              random: false, // 不随机透明度
              anim: {
                  enable: false, // 不启用透明度动画
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
              }
          },
          size: {
              value: 3, // 粒子的大小
              random: true, // 随机大小
              anim: {
                  enable: false,
                  speed: 19.18,
                  size_min: 0.1,
                  sync: false
              }
          },
          line_linked: {
              enable: true, // 启用连接线
              distance: 150, // 连接粒子的距离
              color: "#ffffff", // 连接线的颜色
              opacity: 0.4,
              width: 1 // 连接线的宽度
          },
          move: {
              enable: true, // 启用粒子的移动
              speed: 4, // 粒子移动的速度
              direction: "none", // 没有特定的移动方向
              random: true,
              straight: false,
              out_mode: "out", // 粒子超出边界时的处理方式
              bounce: false,
              attract: {
                  enable: false, // 不启用吸引效果
                  rotateX: 600,
                  rotateY: 1200
              }
          },
          nb: 80 // 这个属性在新的版本中通常不需要使用
      },
      interactivity: {
          detect_on: "canvas", // 在 canvas 上检测鼠标事件
          events: {
              onhover: {
                  enable: false, // 不启用鼠标悬停效果
                  mode: "grab" // 悬停时的效果模式
              },
              onclick: {
                  enable: true, // 启用点击效果
                  mode: "push" // 点击时的效果模式
              },
              resize: true // 启用窗口大小改变时重新计算
          },
          modes: {
              grab: {
                  distance: 400,
                  line_linked: {
                      opacity: 1 // 连接线在抓取时的透明度
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
                  duration: 0.4 // 向外推的效果
              },
              push: {
                  particles_nb: 4 // 点击时添加的粒子数量
              },
              remove: {
                  particles_nb: 2 // 移除的粒子数量
              }
          }
      },
      retina_detect: true // 启用高分辨率支持
  });
}, false);
