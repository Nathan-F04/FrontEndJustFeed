// our-dimain.com/new-meetup
import NewBankForm from "../../components/meetups/NewBankForm";
import { useRouter } from "next/router";
import GlobalContext from "../../pages/store/globalContext";
import { useContext } from "react";

function NewMeetupPage() {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext);

  async function addMeetupHandler(enteredMeetupData) {
    await globalCtx.updateGlobals({
      cmd: "addMeeting",
      newVal: enteredMeetupData,
    });
    router.push("/");
  }

  return <NewBankForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
