import {
  GeneralUserForm,
  type GeneralFormValues,
  GeneralUserTable,
} from '@libs/base-ui-components';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Typography, Divider } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

export const Form2 = () => {
  const [tableData, setTableData] = useState<GeneralFormValues[]>([]);
  const formInstance = useForm<GeneralFormValues>({
    mode: 'onChange',
  });
  const { handleSubmit } = formInstance;

  const onSubmit: SubmitHandler<GeneralFormValues> = async (
    data: GeneralFormValues
  ) => {
    setTableData([...tableData, data]);
  };

  const submit = handleSubmit(onSubmit);
  return (
    <div className="w-full h-full" data-testid="home-page">
      <Title>Second Form</Title>
      <Paragraph>
        This is an example page to demonstrate an interview question given, to
        gauge how to make components re-useable in a mono-repo in a given
        scenario.
      </Paragraph>

      <Divider />
      <GeneralUserForm
        formInstance={formInstance}
        onSubmit={submit}
        formId="test-form"
      />

      <Divider />
      <Paragraph>The resulting data will be displayed below.</Paragraph>
      <GeneralUserTable data={tableData} />
      <Divider />
      <Link
        to="/"
        className="py-2 px-10 bg-charcoal rounded-lg hover:bg-charcoal/40"
      >
        <span className="text-white text-lg font-bold uppercase">
          Back to home
        </span>
      </Link>
    </div>
  );
};
