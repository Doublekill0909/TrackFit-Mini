import { ExerciseList } from "./components/ExerciseList"
import { MotivationalMessage } from "./components/motivationmessage"
import { Welcome } from "./components/welcome"

function App() {

  return (
    <>
        <Welcome />
        <ExerciseList />
        <MotivationalMessage message='"A vida é como um treino: quanto mais você se dedica melhores são os resultados"' author="Chris Bumstead"/>
    </>
  )
}

export default App