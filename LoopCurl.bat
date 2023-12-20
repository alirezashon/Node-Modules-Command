for /l %i in (1,1,10) do @curl -o NUL -s -w "Iteration %i: HTTP Code %{http_code}\n" http://example.com
