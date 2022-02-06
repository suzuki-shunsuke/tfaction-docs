import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        You can build good Terraform Workflow with GitHub Actions easily.
      </>
    ),
  },
  {
    title: 'Monorepo support',
    description: (
      <>
        tfaction supports Monorepo. CI is run only in working directories which code is changed by the pull request.
      </>
    ),
  },
  {
    title: 'Apply safely with Terraform Plan file',
    description: (
      <>
        tfaction runs 'terraform plan' in pull request CI, and uploads the plan file to AWS S3.
        tfaction runs 'terraform apply' in the default branch CI with uploaded plan file.
        This guarantees the result of 'terraform apply'.
        <a href="/tfaction/docs/feature/plan-file">For more details</a>
      </>
    ),
  },
  {
    title: 'Notify the result of terraform plan and apply with tfcmt',
    description: (
      <>
        tfcmt notifies the result of terraform plan and apply with tfcmt.
      </>
    ),
  },
  {
    title: 'Automatioic code fix',
    description: (
      <>
        tfaction updates .terraform.lock.hcl and formats Terraform Configuration automatically.
      </>
    ),
  },
  {
    title: 'Safe update by Renovate',
    description: (
      <>
        tfaction makes pull request by Renovate failed if the result of 'terraform plan' isn't 'No Changes'.
        <a href="/tfaction/docs/feature/renovate">For more details</a>
      </>
    ),
  },
  {
    title: 'Scaffold working directory by GitHub Actions',
    description: (
      <>
        tfaction provides GitHub Actions Workflow to scaffold a working directory.
        <a href="/tfaction/docs/feature/scaffold-working-dir">For more details</a>
      </>
    ),
  },
  {
    title: 'Update related pull requests automatically when the base branch is updated',
    description: (
      <>
        tfaction updates related pull requests automatically when the base branch is updated.
        <a href="/tfaction/docs/feature/auto-update-related-prs">For more details</a>
      </>
    ),
  },
  {
    title: 'Create pull requests automatically to handle the failure of terraform apply',
    description: (
      <>
        Sometimes terraform apply fails even if terraform plan passed.
        tfaction supports the handling by creating pull requests automatically.
        <a href="/tfaction/docs/feature/follow-up-pr">For more details</a>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
