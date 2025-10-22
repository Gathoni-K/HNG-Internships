import styles from './Extra.module.css';


const Extra = () => {
  return (
    <div>
      <section data-testid="test-about-extra" className={styles.extra}>
        <h3 className={styles.heading}>AOB</h3>
        <p className={styles.info}>
          Every stage has taught me something new — and this is just the start. I’m excited to see how much more I can learn and build through the rest of the HNG journey.
        </p>

      </section>
    </div>
  )
}

export default Extra
