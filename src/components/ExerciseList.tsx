export function ExerciseList(){
    return(
        <section style={{
            display: "flex"
        }}>
      <div
        style={{
          border: "2px solid #ccc", padding: 16, backgroundColor:"#c499e0", color: "#ffffff"

        }}>
        <h2>Superiores</h2>
        <p>Duração: 1h30min</p>
        <p>Intensidade: 2/5</p>
      </div>

      <div
        style={{
          border: "2px solid #ccc", padding: 16, backgroundColor:"#c499e0", color: "#ffffff"

        }}>
        <h2>Inferiores</h2>
        <p>Duração: 2h00min</p>
        <p>Intensidade: 5/5</p>
      </div>

      <div
        style={{
          border: "2px solid #ccc", padding: 16, backgroundColor:"#c499e0", color: "#ffffff"

        }}>
        <h2>Cardio</h2>
        <p>Duração: 2h30min</p>
        <p>Intensidade: 3/5</p>
      </div>
    </section>
    );
}