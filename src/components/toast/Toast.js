import React, { useCallback, useEffect } from 'react'
import styles from './Toast.module.css'

function Toast({ list, setList }) {


    const deleteToast = useCallback(id => {
        const toastListItem = list.filter(el => el.id !== id)
        setList(toastListItem)
    }, [list, setList])


    useEffect(() => {
        const interval = setInterval(() => {
            if (list.length) {
                deleteToast(list[0].id)
            }
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [list, deleteToast])




    return (
        <div className={`${styles.container} ${styles.rightBtn}`}>
            {
                list.map((toast, id) => {
                    return (
                        <div key={id}
                            className={`${styles.notification} ${styles.toast} ${styles.rightBtn}`}
                            style={{ backgroundColor: toast.backgroundColor }}
                        >
                            <button onClick={() => deleteToast(toast.id)} >X</button>
                            <div>
                                {toast.title}
                                <div>
                                    {toast.description}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Toast