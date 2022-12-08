import sys

from mapper import mapper


def main():
    [command, *arguments] = sys.argv[1:]
    mapper[command](*arguments)


if __name__ == "__main__":
    main()
