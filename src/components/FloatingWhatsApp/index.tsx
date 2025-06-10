'use client';

import { FaWhatsapp } from 'react-icons/fa';
import * as S from './styles';

const FloatingWhatsApp = () => {
  const phoneNumber = '5531999884688';
  const message = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <S.WhatsAppButton href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco no WhatsApp">
      <FaWhatsapp />
    </S.WhatsAppButton>
  );
};

export default FloatingWhatsApp;