'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation'; // Importação adicionada
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => { // Hook e lógica adicionados
    const styles = styledComponentsStyleSheet.getStyleElement();
    // Limpa as tags de estilo após obtê-las para evitar duplicação
    // @ts-ignore - A propriedade clearTag pode não estar no tipo mais recente, mas é funcional.
    // Alternativamente, pode ser necessário um tipo mais específico ou a instância pode ser gerenciada de outra forma
    // dependendo da versão exata do styled-components e suas tipagens.
    // A linha abaixo é comum em exemplos:
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // Durante a renderização no cliente, não precisamos do StyleSheetManager aqui,
  // pois os estilos já foram inseridos pelo servidor.
  if (typeof window !== 'undefined') { // Verificação adicionada
    return <>{children}</>;
  }

  // Na renderização do servidor, envolvemos os children com StyleSheetManager
  // para coletar os estilos.
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}