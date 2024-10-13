import Link from 'next/link';

const Teste = ({ texto, link }) => {
  return (
    <li>
      <Link href={link} className="text-black hover:text-gray-400">
        {texto}
      </Link>
    </li>
  );
};

export default Teste;
