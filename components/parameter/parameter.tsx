import styles from './parameter.module.css'

export type ParameterProps = {
  name: string,
  type: string,
  required: boolean, 
  children: string,
}

export const Parameter = ({ name, type, required, children }: ParameterProps) => {

  return (
    <div className={styles.container}>
      <hr className={styles.splitter} />
      <div>
        <code className={styles.name}>{name}</code>
        <span className={styles.type}>{type}</span>
        { required && <span className={styles.required}>Required</span> }
      </div>
      <div className={styles.descriptionContainer}>
        <span>{children}</span>
      </div>
    </div>
  )
}
