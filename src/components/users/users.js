import React, { useEffect, useState } from 'react'
import User from '../user/user'
import axios from 'axios'
import styles from './users.module.css'
import {FaBackward, FaForward} from 'react-icons/fa'


const Users = () => {

  const [user, setUser] = useState([])
  const [page, setPage] = useState(1)

  
  const url = `https://api.github.com/search/repositories?q=created:>2022-05-03&sort=stars&order=desc&page=2=${page}`
  console.log(page);

  const getUsers = async () => {
    try {     
          const response = await axios.get(url);
          const data = response.data.items;
          setUser(data)
        } catch (error) {
          console.log(error.response);
        }
  }

  useEffect(() => {
    getUsers();
  }, [page])


  const nextPage = () => {
    if (page === 30) {
        setPage(page)
      }else{
        setPage(page + 1)
      }
  }

  const prevPage = () => {
    
    if (page < 2) {
      setPage(page)
    } else {
      setPage(page - 1)
    }
  }


  return (
    <div>
      <div className={styles.heading}>
        <h2> MOST STARRED GITHUB REPOSITORIES IN THE LAST 30 DAYS</h2>
      </div>
      
      <div className={styles.repos}>
        { user.map((user, index) => <User key={index} data={user} />)  }
      </div>
     

      
      <div className={styles.buttons}>

        <button className={styles.action} onClick={prevPage}>
          <FaBackward />
          <span>Prev</span>
        </button>

        <button className={styles.action} onClick={nextPage}>
          <span>Next</span>
          <FaForward />
        </button>

      </div>

    </div>
  )
}

export default Users
