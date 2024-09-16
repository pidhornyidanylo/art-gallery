import Calendar from '@/components/Calendar';
import VisitForm from '@/components/VisitForm';
import React from 'react';

const VisitPage: React.FC = () => {
  return (
    <section className="flex justify-center flex-col items-center gap-10">
      <Calendar />
      <VisitForm />
    </section>
  );
};

export default VisitPage;
