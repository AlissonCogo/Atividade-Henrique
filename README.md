# Atividade-Henrique
Atividade Henrique

## Campos Validados

- Nome: Deve conter no máximo 100 caracteres e não pode conter números.
- Email: Deve seguir o formato de um email válido.
- Número de Telefone com DDD: Deve seguir o padrão brasileiro.

## Expressões Regulares Utilizadas

- **Nome**: `^[^\d]+$`
    - Esta expressão garante que o campo não contenha nenhum dígito numérico.
- **Email**: `^[^\s@]+@[^\s@]+\.[^\s@]+$`
    - Esta expressão valida o formato de um email comum.
- **Telefone**: `^\d{2}\d{4,5}\d{4}$`
    - Esta expressão valida o formato do número de telefone no padrão brasileiro de DDD + número.

## Como Funciona

1. O usuário preenche os campos do formulário.
2. Ao clicar em enviar, a função `validarForm()` é chamada.
3. Cada campo é validado individualmente com suas respectivas expressões regulares.
4. Se algum campo não passar na validação, um alerta é exibido informando o problema.
5. Se todos os campos forem válidos, o formulário é enviado.

## Decodificação das Validações dos números

^: Representa o início da string.
.[^\d]: O colchete [] indica uma classe de caracteres. O ^ dentro dos colchetes nega a classe, ou seja, ele indica que queremos encontrar qualquer caractere que não esteja na classe seguinte.
\d: Representa qualquer dígito numérico (0-9).
+: Indica que o caractere anterior (no nosso caso, [^\d]) pode ocorrer uma ou mais vezes.
$: Representa o final da string.
