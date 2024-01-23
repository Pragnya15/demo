package com.ibm.library;
import java.util.*;

public class Library {
	ArrayList<Book>books;
	HashMap<String,ArrayList<Book>>member;
	
	
	public Library() {
		this.books = new ArrayList<>();
		this.member = new HashMap<>();
	}
	
	void addBook(String name,String category) {
		Book newBook=new Book(name,category);
		books.add(newBook);
		System.out.println(name+" added successfully to the booklist");
	}
	
	void listAllBooks() {
		for(Book book:books) {
			System.out.println(book.name+" "+book.category);
		}
	}
	
	Book searchBooks(String name) {
		for(Book book:books) {
			if(book.name.equalsIgnoreCase(name)) {
				return book;
			}
		}
		return null;
	}
	void borrowBook(String memberName,String bookName) {
		Book newBook=searchBooks(bookName);
		if(newBook!=null && newBook.availability==true ) {
			newBook.availability=false;
			if(!(member.containsKey(memberName))) {
				member.put(memberName,new ArrayList<Book>());
			}
			member.get(memberName).add(newBook);
			System.out.println(bookName+" borrowed successfully");
		}
		else {
			System.out.println("The book is not there");
		}
	}
	
	void returnBook(String memberName,String bookName) {
		Book returnBook=searchBooks(bookName);
		if(member.get(memberName).contains(returnBook)) {
			member.get(memberName).remove(returnBook);
			returnBook.availability=true;
		}
		else {
			System.out.println("Book is not present in the borrowed list");
		}
	}
	public static void main(String[] args) {
		Library l=new Library();
		Scanner sc=new Scanner(System.in);
		
		System.out.println("1.Add a new book");
		System.out.println("2.List all books");
		System.out.println("3.Search for a book");
		System.out.println("4.Borrow a new book");
		System.out.println("5.Return a new book");
		System.out.println("6.Exit");
		
		
		while(true) {
			int choice=sc.nextInt();
		switch(choice){
		case 1:
				System.out.println("Enter the name of the book");
				String newName=sc.next();
				System.out.println("Enter the category of the book");
				String newCategory=sc.next();
				l.addBook(newName,newCategory);
				break;
		
		case 2:
				System.out.println("The list of all books are:");
				l.listAllBooks();
				break;
				
		case 3:
				System.out.println("Enter the book you want");
				String search=sc.next();
				Book found=l.searchBooks(search);
				if(found!=null) {
					System.out.println("The book is there");
				}
				else {
					System.out.println("The book is not there");
				}
				
				break;
				
		case 4:		
				System.out.println("Enter your name");
				String memberName=sc.next();
				System.out.println("Enter the book name you want to borrow");
				String bookName=sc.next();
				l.borrowBook(memberName,bookName);
				break;
				
		case 5:
				System.out.println("Enter your name");
				String memberName1=sc.next();
				System.out.println("Enter the book name you want to return");
				String bookName1=sc.next();
				l.returnBook(memberName1, bookName1);
				break;
		case 6:
				System.exit(0);

		}
		}
		
	}

}
