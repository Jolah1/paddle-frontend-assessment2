import React from 'react'
import styles from './user.module.css'
import moment from 'moment'

const User = ({ data }) => {
  const currentDate = moment(new Date());
  const repoCreatedDate = moment(data.created_at);
  const timeInterval = currentDate.diff(repoCreatedDate, 'days') + 1;

  return (
    <>
      <div className={styles.parent}>
             <main className={styles.userContainer}>
              
              <div className={styles.userAvatar}>
                  <img src={data.owner.avatar_url} alt="user avatar" className={styles.avatar} />
              </div>
                
              <div className={styles.userDetails}>
              
                      <div className={styles.repoName}>
                          <h2>{data.name}</h2>
                          <div className={styles.description}>
                              {data.description} 
                          </div>
                      </div>
                
                      <div className={styles.repoDetails}>
                        <span className={styles.star}>Stars: {data.stargazers_count}</span>
                        <span className={styles.issue}>Issues: {data.open_issues_count}</span>
                        <span>Submitted {timeInterval > 1 ? `${timeInterval} days` : `${timeInterval} day`} ago by <strong>{data.owner.login}</strong></span>
                      </div>
              </div>
                
          </main>  
      </div>
         
      </>
  )
}

export default User