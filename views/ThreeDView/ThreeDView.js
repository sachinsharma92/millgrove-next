/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { useEffect } from "react";
import { loadGLTFModel } from "../../lib/model";
import styles from "./ThreeDView.module.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeDView = () => {
  useEffect(() => {
    renderVilla();
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-memories", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 0.4,
      skewY: 0,
      stagger: {
        amount: 0.3,
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: "#makeMemories",
        start: "top bottom",
        markers: false,
      },
    });
  }, []);
  const renderVilla = () => {
    // Canvas
    const canvas = document.querySelector("#villa");
    if (canvas) {
      // Scene
      const scene = new THREE.Scene();

      // GLTF Loader
      loadGLTFModel(scene, "/models/villa.glb", {
        receiveShadow: false,
        castShadow: false,
      });

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const pointLight = new THREE.PointLight(0xffffff, 0.5);
      const directionalLight = new THREE.PointLight(0xffffff, 0.5);
      pointLight.position.x = 3;
      pointLight.position.y = 2;
      pointLight.position.z = 3.5;
      directionalLight.position.set(0, 1, -1);
      scene.add(ambientLight, pointLight, directionalLight);

      /**
       * Sizes
       */
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // Cursor
      const cursor = {
        x: 0,
        y: 0,
      };

      window.addEventListener("mousemove", (event) => {
        cursor.x = event.clientX / sizes.width - 0.5;
        cursor.y = -(event.clientY / sizes.height - 0.5);
      });

      window.addEventListener("resize", () => {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      /**
       * Camera
       */
      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        10000
      );
      camera.position.x = 0;
      camera.position.y = 5;
      camera.position.z = 20;
      scene.add(camera);

      /**
       * Renderer
       */
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = false;

      // Clock
      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Render
        renderer.render(scene, camera);

        window.requestAnimationFrame(tick);
      };

      tick();
    }
  };
  return (
    <div className={styles.wrapper}>
      <div
        className="second-fold-img"
        data-aos="fade-up"
        data-aos-duration="1000"
      ></div>
      <div id="makeMemories" className={styles.textWrapperDesktop}>
        <div className={`${styles.heading} animation-block`}>
          <h2 className={`${styles.first} animation-memories`}>
            Make Memories<h2 className={styles.second}>On</h2>
          </h2>
        </div>
        <div className={styles.flexSection}>
          <div className="animation-block">
            <p className={`${styles.description} animation-memories`}>
              Millgrove extends an unparalleled offering to a select few - a
              rare chance to own a 1000 square yard plot inclusive of an
              exquisite independent home. It is ultra-low-density by design with
              only a limited number of single dwelling plots thoughtfully
              arranged over 23-acres.
            </p>
          </div>
          <div className="animation-block">
            <h2 className={`${styles.third} animation-memories`}>
              Your own land
            </h2>
          </div>
        </div>
      </div>

      <div className={styles.textWrapperMobile}>
        <div className={styles.heading}>
          <h2 className={styles.first}>
            Make Memories
            <div className={styles.second}>On</div>
            Your own land
          </h2>
        </div>
        <div className={styles.flexSection}>
          <p className={styles.description}>
            Millgrove extends an unparalleled offering to a select few - a rare
            chance to own a 1000 square yard plot inclusive of an exquisite
            independent home. It is ultra-low-density by design with only a
            limited number of single dwelling plots thoughtfully arranged over
            23-acres.
          </p>
        </div>
      </div>

      <div className={styles.threeDModule}>
        <canvas id="villa" className={styles.villa}></canvas>
      </div>
      {/* <div
        className={`${styles.threeDView}`}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src="/images/threed.png"
          alt="Three-D view of millgrove properties site"
          className={styles.imgStyle}
        />
      </div> */}
    </div>
  );
};

export default ThreeDView;
