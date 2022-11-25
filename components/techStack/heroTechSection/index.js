import React from 'react'
import Image from 'next/image'
import style from "./style.module.scss"

export default function HeroTechSection() {

  const technologyStack = [
    {
      id: 1,
      firstImgUrl: "/icons/web-dev.svg",
      heading: 'Web Development',
      description: "At WishIT, we design and develop websites and web apps that can make sure you’re seen and heard in the right circles",
      techDevs: [
        {
          heading: 'Frontend Development',
          description: "We love working with these Frontend frameworks and libraries",
          techImages: [
            {
              imageUrl: '/icons/technology/angular.svg',
              techTitle: 'Angular'
            },
            {
              imageUrl: '/icons/technology/react.svg',
              techTitle: 'React'
            },
            {
              imageUrl: '/icons/technology/css3.svg',
              techTitle: 'CSS3'
            },
            {
              imageUrl: '/icons/technology/vue.svg',
              techTitle: 'Vue.js'
            },
            {
              imageUrl: '/icons/technology/nextjs.svg',
              techTitle: 'Next.js'
            },

            {
              imageUrl: '/icons/technology/jquery.svg',
              techTitle: 'JQuery'
            },
            {
              imageUrl: '/icons/technology/bootstrap.svg',
              techTitle: 'Bootstrap'
            },
            {
              imageUrl: '/icons/technology/html5.svg',
              techTitle: 'HTML5'
            }
          ]
        },
        {
          heading: 'Backend Development',
          description: "We enjoy extensive experience with these Backend frameworks and libraries",
          techImages: [
            {
              imageUrl: '/icons/technology/angular.svg',
              techTitle: 'Angular'
            },
            {
              imageUrl: '/icons/technology/react.svg',
              techTitle: 'React'
            },
            {
              imageUrl: '/icons/technology/css3.svg',
              techTitle: 'CSS3'
            },
            {
              imageUrl: '/icons/technology/vue.svg',
              techTitle: 'Vue.js'
            },
            {
              imageUrl: '/icons/technology/nextjs.svg',
              techTitle: 'Next.js'
            },

            {
              imageUrl: '/icons/technology/jquery.svg',
              techTitle: 'JQuery'
            },
            {
              imageUrl: '/icons/technology/bootstrap.svg',
              techTitle: 'Bootstrap'
            },
            {
              imageUrl: '/icons/technology/html5.svg',
              techTitle: 'HTML5'
            }
          ]
        }
      ],
    },
    {
      id: 2,
      firstImgUrl: "/icons/app-development.svg",
      heading: 'App Development',
      description: "At WishIT, we design and develop websites and web apps that can make sure you’re seen and heard in the right circles",
      techDevs: [
        {
          heading: 'Native apps',
          description: "We love working with these Frontend frameworks and libraries",
          techImages: [
            {
              imageUrl: '/icons/technology/android.svg',
              techTitle: 'Angular'
            },
            {
              imageUrl: '/icons/technology/apple.svg',
              techTitle: 'React'
            },
          ]
        },
        {
          heading: 'Hybrid apps',
          description: "We enjoy extensive experience with these Backend frameworks and libraries",
          techImages: [
            {
              imageUrl: '/icons/technology/ionic.svg',
              techTitle: 'Ionic'
            },
            {
              imageUrl: '/icons/technology/react.svg',
              techTitle: 'React Native'
            },
            {
              imageUrl: '/icons/technology/flutter.svg',
              techTitle: 'Flutter'
            },
          ]
        }
      ],
    },
  ];


  return (
    <section className={style.heroTechSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h1 className="animation-block text-white">
              <div className={`${style.titleCustom} title4 animation-text`}>A look at wide variety of</div>
              <div className="title2 animation-text"><span className='text-gradient'>Technology Stack</span></div>
            </h1>
            <p className="subtext mt-4">WishIT is a leading IT services provider which has established a name in the industry by delivering great bespoke web and mobile applications. </p>
          </div>
          <div className="col-sm-6">
            <Image
              src="/images/hero-img-3.svg"
              alt="Picture of the author"
              width={639}
              height={360}
            />
          </div>
        </div>


        <div className={style.tectInfoSection}>
          <div className="row align-items-center">
            <div className="col-sm-12">
              {technologyStack.map((techMain, index) => {
                return (
                  <div key={index} className={style.techWrapper}>
                    <div className={style.iconSec}>
                      <Image
                        src={techMain.firstImgUrl}
                        alt="Picture of the author"
                        width={32}
                        height={32}
                      />
                      <h4 className="text1 text-primary">{techMain.heading}</h4>
                    </div>
                    <p className="subtext mt-2">{techMain.description}</p>
                    {techMain.techDevs.map((techDev, index) => {
                      return (
                        <div className="col-sm-12 mt-5" key={index}>
                          <h4 className="text2">{techDev.heading}</h4>
                          <p className="subtext mt-2">{techDev.description}</p>

                          <div className={style.techListSection}>
                            <ul className={style.techList}>
                              {techDev.techImages.map((techImage, index) => {
                                return (
                                  <li key={index}>
                                    <Image
                                      src={techImage.imageUrl}
                                      alt="Picture of the author"
                                      width={48}
                                      height={48}
                                    />
                                    <p className="subtext-semibold mt-2">{techImage.techTitle}</p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}