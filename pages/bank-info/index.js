// our-dimain.com/new-meetup
import NewSettingsForm from "../../components/homePageComponents/NewSettingsForm";
import { useRouter } from "next/router";
import GlobalContext from "../../store/globalContext";
import { useContext } from "react";

function BankPage() {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext);

  async function addMeetupHandler(enteredMeetupData) {
    await globalCtx.updateGlobals({
      // cmd: "addCard",
      // newVal: enteredMeetupData,
    });
    router.push("/");
  }
  return <NewSettingsForm onAddCard={addMeetupHandler} />;
}

export default BankPage;
