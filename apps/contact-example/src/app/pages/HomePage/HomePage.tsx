import { Link } from 'react-router-dom';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

export const HomePage = () => {
  return (
    <div className="w-full h-full" data-testid="home-page">
      <Title>Example Page</Title>
      <Paragraph>
        This is an example page to demonstrate an interview question given, to
        gauge how to make components re-useable in a mono-repo in a given
        scenario.
      </Paragraph>

      <Divider />

      <Paragraph>
        Select on of the options below to see a form.
      </Paragraph>
      <div className="flex space-x-3">
        <Link
          to="/form1"
          className="py-2 px-10 bg-charcoal rounded-lg hover:bg-charcoal/40"
        >
          <span className="text-white text-lg font-bold uppercase">Form 1</span>
        </Link>
        <Link
          to="/form2"
          className="py-2 px-10 bg-white border border-charcoal hover:bg-tertiary/20 rounded-lg"
        >
          <span className="text-tertiary text-lg font-bold uppercase">
            Form 2
          </span>
        </Link>
      </div>
    </div>
  );
};
