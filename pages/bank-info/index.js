// our-dimain.com/new-meetup
import NewBankForm from '../../components/meetups/NewBankForm'
import { useRouter } from 'next/router';

function BankPage() {
    const router = useRouter();
    async function addBankHandler(enteredBankupData)  {
        const response = await fetch('/api/get-meetings', {
            method: 'POST',
            body: JSON.stringify(enteredBankupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        router.push('/');
    }

    return <NewBankForm onAddMeetup={addBankHandler} />
}

export default BankPage