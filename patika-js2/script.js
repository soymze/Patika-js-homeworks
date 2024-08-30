let todos = ["3 Litre Su İç", "Ödevleri Yap", "En Saat Kodlama Yap", "Yemek Yap", "50 Sayfa Kitap Oku"];
      
      const task = document.getElementById('task');
      const todoForm = document.getElementById('todoForm');
      const todoList = document.getElementById('list');
      
      function showAlert(message, type = 'success') {
        const alertBox = document.getElementById('alertBox');
        alertBox.textContent = message;
      
        if (type === 'success') {
          alertBox.style.backgroundColor = '#4caf50';
        } else if (type === 'error') {
          alertBox.style.backgroundColor = '#f44336';
        }
      
        alertBox.style.display = 'block';
      
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 3000);
      }
      
      function addTodo(event) {
        event.preventDefault();
      
        const newTodo = task.value;
      
        if (newTodo.trim() !== "") {
          todos.push(newTodo);
          task.value = '';
          displayTodos();
          showAlert('Listeye eklendi!', 'success');
        } else {
          showAlert('Boş öğe eklenemez!', 'error');
        }
      }
      
      function displayTodos() {
        todoList.innerHTML = '';
      
        todos.forEach((todo, index) => {
          const li = document.createElement('li');
          
          const taskText = document.createElement('span');
          taskText.textContent = todo;
          
          const deleteButton = document.createElement('button');
          const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svgIcon.setAttribute("width", "20");
          svgIcon.setAttribute("height", "20");
          svgIcon.setAttribute("viewBox", "0 0 50 50");

          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", "M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z");
          svgIcon.appendChild(path);

          deleteButton.appendChild(svgIcon);

          deleteButton.onclick = (e) => {
            e.stopPropagation();
            removeTodo(index);
          };

          li.appendChild(taskText);
          li.appendChild(deleteButton);
      
          li.addEventListener('click', () => {
            li.classList.toggle('completed');
          });

          todoList.appendChild(li);
        });
      }
      
      function removeTodo(index) {
        todos.splice(index, 1);
        displayTodos();
      }
      
      todoForm.addEventListener('submit', addTodo);
      
      displayTodos();