# Filtragem por URL - Página de Projetos

## Implementação

A página de projetos agora utiliza parâmetros de URL para gerenciar a filtragem de categorias.

### Como funciona

1. **URL padrão**: `/projetos` - mostra todos os projetos
2. **URL com filtro**: `/projetos?categoria=Quartos` - mostra apenas projetos da categoria "Quartos"

### Benefícios

- ✅ URLs compartilháveis
- ✅ Navegação pelo botão voltar/avançar do navegador funciona
- ✅ Estado persistente ao recarregar a página
- ✅ Melhor SEO
- ✅ Bookmarks funcionam corretamente

### Categorias disponíveis

- `Quartos`
- `Sala`
- `Cozinha`
- `Corporativos`
- `Banheiros`
- `Home Office`
- `Projetos Especiais`

### Exemplos de URLs

```
/projetos                           # Todos os projetos
/projetos?categoria=Quartos         # Apenas quartos
/projetos?categoria=Sala            # Apenas salas
/projetos?categoria=Cozinha         # Apenas cozinhas
/projetos?categoria=Corporativos    # Apenas projetos corporativos
/projetos?categoria=Banheiros       # Apenas banheiros
/projetos?categoria=Home%20Office   # Apenas home offices
/projetos?categoria=Projetos%20Especiais # Apenas projetos especiais
```

### Implementação técnica

- Usa `useRouter` e `useSearchParams` do Next.js 13+
- Componente envolvido em `Suspense` para evitar problemas de hidratação
- Sincronização bidirecional entre estado local e parâmetros da URL
- Transições suaves mantidas com `isTransitioning`
