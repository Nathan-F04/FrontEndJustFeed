import NewSettingsForm from "../../components/homePageComponents/NewSettingsForm";
import GlobalContext from "../../store/globalContext";
import { useContext } from "react";

function BankPage() {
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
  }

  return (
    <NewSettingsForm
      onAddCard={addCardHandler}
      onChangeDetails={changeDetailsHandler}
    />
  );
}

export default BankPage;
