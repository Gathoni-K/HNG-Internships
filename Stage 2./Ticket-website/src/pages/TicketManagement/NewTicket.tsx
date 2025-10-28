import styles from './NewTicket.module.css';
import { IoAddSharp } from "react-icons/io5";
import { useForm } from 'react-hook-form';

    interface TicketFormData {
    title: string;
    description?: string;
}
    interface NewTicketProps {
    onAddTicket: (title: string, description?: string) => void;
}

const NewTicket:React.FC<NewTicketProps> = ({ onAddTicket }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<TicketFormData>();

    const onSubmit = (data: TicketFormData) => {
        onAddTicket(data.title, data.description);
        reset(); // Clear form after submit
    };

    return (
        <div className={styles.addTicket}>

            <div className={styles.header}>
                <h3>Tickets</h3>
            </div>

            <div className={styles.add}>
                <form onSubmit={handleSubmit(onSubmit)}>
                     <div className={styles.formGroup}>
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            placeholder="Enter ticket title..."
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 3,
                message: 'Title must be at least 3 characters'
              }
            })}
            className={errors.title ? styles.errorInput : ''}
          />
          {errors.title && (
            <span className={styles.errorMessage}>{errors.title.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Enter ticket description (optional)..."
            {...register('description')}
            rows={3}
          />
        </div>


                    <button>
                        <IoAddSharp />
                        New
                        </button>
                </form>

            </div>
            
        </div>
    )
}

export default NewTicket