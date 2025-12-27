// our-dimain.com/new-meetup
import NewSettingsForm from "../../components/homePageComponents/NewSettingsForm";
import { useRouter } from "next/router";
import GlobalContext from "../../store/globalContext";
import { useContext } from "react";

function BankPage() {
  const router = useRouter();
  const globalCtx = useContext(GlobalContext);

  async function addCardHandler(enteredCardData) {
    await globalCtx.updateGlobals({
      cmd: "addCard",
      newVal: enteredCardData,
    });
  }

  async function changeDetailsHandler(enteredDetails) {
    await globalCtx.updateGlobals({
      cmd: "changeDetails",
      newVal: enteredDetails,
    });
    router.push("/");
  }

  return (
    <NewSettingsForm
      onAddCard={addCardHandler}
      onChangeDetails={changeDetailsHandler}
    />
  );
}

export default BankPage;
