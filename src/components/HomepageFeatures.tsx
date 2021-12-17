import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About Me',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        자기소개 자리입니다.
      </>
    ),
  },
  {
    title: '기술 스택',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        기술 스택이 들어갈 자리입니다.
      </>
    ),
  },
  {
    title: '여기엔 뭘 넣을까',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        띠리리링
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
