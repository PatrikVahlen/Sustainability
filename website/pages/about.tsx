import styles from "@/styles/About.module.css";
import Card from "@/components/card";
import Page from "./page";

export default function Intensity() {
  return (
    <Page>
      <main>
        <h1>About this page</h1>
        <SegmentInfo></SegmentInfo>
      </main>
    </Page>
  );
}

function SegmentInfo() {
  return (
    <div className={styles.grid}>
      <Card style={{ gridArea: "a" }}>
        <h2>Calculating Digital Emissions</h2>
        <p>
          The basis of the calculations can be found on this website: <a href="https://sustainablewebdesign.org/calculating-digital-emissions/">www.https://sustainablewebdesign.org/</a>
        </p>
      </Card>

      <Card style={{ gridArea: "b" }}>
        <h2>Emissions Calculation Formulas</h2>
        <br></br>
        <p>
          <strong>Energy per visit in kWh (E):</strong>
        </p>
        <p>E = [Data Transfer per Visit (new visitors) in GB x 0.81 kWh/GB x 0.75] + [Data Transfer per Visit (returning visitors) in GB x 0.81 kWh/GB x 0.25 x 0.02</p>
        <br></br>
        <p>
          <strong>Emissions per visit in grams CO2e (C):</strong>
        </p>
        <p>C = E x 442 g/kWh (or alternative/region-specific carbon factor)</p>
        <br></br>
        <p>
          <strong>Annual energy in kWh (AE):</strong>
        </p>
        <p>AE = E x Monthly Visitors x 12</p>
        <br></br>
        <p>
          <strong>Annual emissions in grams CO2e (AC):</strong>
        </p>
        <p>AC = C x Monthly Visitors x 12</p>
        <br></br>
        <p>
          <strong>Annual Segment Energy:</strong>
        </p>
        <p>Consumer device energy = AE x 0.52</p>

        <p>Network energy = AE x 0.14</p>

        <p>Data center energy = AE x 0.15</p>

        <p>Production energy = AE x 0.19</p>
        <br></br>
        <p>
          <strong>    Annual Segment Emissions:</strong>
        </p>
        <p>   Consumer device emissions = AC x 0.52</p>

        <p>Network emissions = AC x 0.14</p>

        <p>Data center emission = AC x 0.15</p>

        <p>Production emission = AC x 0.19</p>
      </Card>

      <Card style={{ gridArea: "c" }}>
        <h2>System Segments</h2>
        <br></br>
        <ul>
          <li>
            <p><strong>Consumer device use:</strong> end users interacting with a product or service. This accounts for an estimated 52% of the system. Returning visitors are assumed to be 25%, loading 2% of data.</p>
          </li>
          <li>
            <p><strong>Network use:</strong>data transferred across the network. This accounts for an estimated 14% of the system.</p>
          </li>
          <li>
            <p><strong>Data center use:</strong>energy required to house and serve data. This accounts for an estimated 15% of the system.</p>
          </li>
          <li>
            <p><strong>Hardware production:</strong>embodied energy used in the creation of embedded chips, use of data centers, use of networks, and the use of consumer communication devices. This accounts for an estimated 19% of the system</p>
          </li>
        </ul>
      </Card>

      <Card style={{ gridArea: "d" }}>
        <h2>Specific Data Points</h2>
        <br></br>
        <ul>
          <li>
            <p>Annual Internet Energy: 1988 TWh</p>
          </li>
          <li>
            <p>Annual End User Traffic: 2444 EB</p>
          </li>
          <li>
            <p>Annual Internet Energy / Annual End User Traffic = 0.81 tWh/EB or <strong>0.81 kWh/GB</strong></p>
          </li>
          <li>
            <p>Carbon factor (global grid): <strong>442 g/kWh</strong></p>
          </li>
          <li>
            <p>Carbon factor (renewable energy source): <strong>50 g/kWh</strong></p>
          </li>

        </ul>
      </Card>
    </div>
  );
}

