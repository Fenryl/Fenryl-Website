import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Error from "../components/error";

export default class extends React.Component {
  render() {
    return (
      <Layout title="Bastien Cailhol : Développement">
        <Header focus="dev" />
        <div className="pageContent">
          <Error />
        </div>
        <Footer />
        <style jsx>
          {
            `
            .pageContent {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            } 
        `
          }
        </style>
      </Layout>
    );
  }
}
